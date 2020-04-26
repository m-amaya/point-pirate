import { Observable, fromEvent } from 'rxjs';
import io from 'socket.io-client';

const socket = io();

export interface User {
  id: string;
  name: string;
}

export class UserStore {
  me$: Observable<User>;
  updateUsername: (name: string) => void;

  constructor() {
    this.me$ = fromEvent<User>(socket, 'me');
    this.updateUsername = (name) => {
      socket.emit('updateUsername', name);
    };
  }
}
