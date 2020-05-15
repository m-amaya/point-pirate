import { Observable, fromEvent } from 'rxjs';

export interface User {
  id: string;
  name: string;
}

export class UserStore {
  me$: Observable<User>;
  updateUsername: (name: string) => void;

  constructor(socket: SocketIOClient.Socket) {
    this.me$ = fromEvent<User>(socket, 'me');
    this.updateUsername = (name) => {
      socket.emit('updateUsername', name);
    };
  }
}
