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
  const user = await c.addUser(socket.id);

  socket.on('disconnect', () => {
    c.removeUser(socket.id);
  });
});

server.listen(SERVER.port, () =>
  console.log(`🔮 Magic happens on port ${SERVER.port}...`),
);
