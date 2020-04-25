import http from 'http';
import socketIO from 'socket.io';

import { app } from './app';
import { SERVER } from './project.config';

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
});

server.listen(SERVER.port, () =>
  console.log(`Magic happens on port ${SERVER.port}!`),
);
