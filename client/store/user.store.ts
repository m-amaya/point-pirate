import { fromEvent, BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  inRoom: string | null;
  createdAt: number | null;
}

const INIT_USER: User = {
  id: '',
  name: '',
  inRoom: null,
  createdAt: null,
};

export class UserStore {
  private socket: SocketIOClient.Socket;
  public me$: BehaviorSubject<User>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.me$ = new BehaviorSubject<User>(INIT_USER);

    const meChannel$ = fromEvent<User>(socket, 'user:me');

    meChannel$.subscribe({
      next: (me) => this.me$.next(me),
    });
  }

  public updateName = (name: string) =>
    this.socket.emit('user:me:update', name);
}
