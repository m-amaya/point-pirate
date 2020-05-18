import http from 'http';
import mongoose from 'mongoose';
import socketIO from 'socket.io';

import { app } from './app';
import { SERVER, DB } from './project.config';
import { c } from './db/controllers';

const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(
  DB.connUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log('✘ Error connecting to MongoDB:', err);
    }
  },
);

io.on('connection', async (socket) => {
  const me = await c.addUser();
  /**
   * Initial events
   */
  socket.emit('user:me', me);
  socket.emit('room:list', await c.listRooms());

  /**
   * Received user events
   */
  socket.on('user:me:update', async (name: string) => {
    const user = await c.updateUsername(me.id, name);
    socket.emit('user:me', user);
  });

  /**
   * Received room events
   */
  socket.on('room:add', async (roomName: string) => {
    await c.addRoom(roomName);
    io.emit('room:list', await c.listRooms());
  });

  socket.on('room:join', async (roomId: string) => {
    const [room, user] = await c.joinRoom(roomId, me.id);
    socket.join(room.id, async () => {
      if (room.sessions.length) {
        io.to(room.id).emit('room:current', room);
        io.to(room.id).emit('session:current', room.sessions[0]);
      } else {
        const [session, room] = await c.addSession(roomId);
        io.to(room.id).emit('room:current', room);
        io.to(room.id).emit('session:current', session);
      }
      io.emit('room:list', await c.listRooms());
      socket.emit('user:me', user);
    });
  });

  socket.on('room:leave', async () => {
    const [room, user] = await c.leaveRoom(me.id);
    socket.leave(room.id, async () => {
      io.to(room.id).emit('room:current', room);
      socket.emit('user:me', user);
      io.emit('room:list', await c.listRooms());
    });
  });

  socket.on('room:remove', async (roomId: string) => {
    await c.removeRoom(roomId);
    io.emit('room:list', await c.listRooms());
  });

  /**
   * Received session events
   */
  socket.on('session:add', async (roomId: string) => {
    const [session, room] = await c.addSession(roomId);
    io.to(room.id).emit('session:current', session);
    io.to(room.id).emit('room:current', room);
    io.emit('room:list', await c.listRooms());
  });

  socket.on('session:start', async (sessionId: string) => {
    const session = await c.startSession(sessionId);
    io.to(session.inRoom).emit('session:current', session);
  });
  // socket.on('session:end', async (sessionId: string) => {
  //   const session = await c.endSession(sessionId);
  //   io.to(session.inRoom).emit('session:current', session);
  // });
  // socket.on('session:redo', async (sessionId: string) => {
  //   const [session, room] = await c.redoSession(sessionId);
  //   io.to(room.id).emit('session:current', session);
  //   io.to(room.id).emit('room:current', room);
  // });
  socket.on(
    'session:description:update',
    async (sessionId: string, description: string) => {
      const session = await c.updateStoryDescription(sessionId, description);
      io.to(session.inRoom).emit('session:current', session);
    },
  );
  // socket.on('session:vote', async (sessionId: string, points: number) => {
  //   const session = await c.castVote(sessionId, me.id, points);
  //   io.to(session.inRoom).emit('session:current', session);
  // });

  socket.on('disconnect', async () => {
    const [room] = await c.leaveRoom(me.id);
    socket.leave(room.id, async () => {
      io.to(room.id).emit('room:current', room);
      io.emit('room:list', await c.listRooms());
    });
  });
});

server.listen(SERVER.port, () =>
  console.log(`🔮 Magic happens on port ${SERVER.port}...`),
);
