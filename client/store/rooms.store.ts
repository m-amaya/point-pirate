import { Observable, fromEvent } from 'rxjs';

export interface Room {
  id: string;
  name: string;
  isActive: boolean;
}

export class RoomsStore {
  list$: Observable<Room[]>;
  addRoom: (roomName: string) => void;
  removeRoom: (roomId: string) => void;

  constructor(socket: SocketIOClient.Socket) {
    this.list$ = fromEvent<Room[]>(socket, 'listRooms');
    this.addRoom = (roomName) => {
      socket.emit('addRoom', roomName);
    };
    this.removeRoom = (roomId) => {
      socket.emit('removeRoom', roomId);
    };
  }
}
