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
  const me = await c.addUser(socket.id);
  socket.emit('me', me);

  const rooms = await c.listRooms();
  socket.emit('listRooms', rooms);

  socket.on('updateUsername', async (name: string) => {
    await c.updateUsername(me.id, name);
  });

  socket.on('addRoom', async (roomName: string) => {
    await c.addRoom(roomName);
    const rooms = await c.listRooms();
    io.emit('listRooms', rooms);
  });

  socket.on('joinRoom', async (roomId: string) => {
    await c.joinRoom(roomId, me.id);
    // const rooms = await c.listRooms();
    // io.emit('listRooms', rooms);
  });

  socket.on('leaveRoom', async () => {
    await c.leaveRoom(mongoose.Types.ObjectId(socket.id));
  });

  socket.on('removeRoom', async (roomId: string) => {
    await c.removeRoom(mongoose.Types.ObjectId(roomId));
    const rooms = await c.listRooms();
    io.emit('listRooms', rooms);
  });

  socket.on('disconnect', () => {
    c.removeUser(socket.id);
  });
});

server.listen(SERVER.port, () =>
  console.log(`🔮 Magic happens on port ${SERVER.port}...`),
);
