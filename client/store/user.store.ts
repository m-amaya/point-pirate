import { fromEvent, Observable, BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
}

export class UserStore {
  private socket: SocketIOClient.Socket;
  private me$: Observable<User>;

  public meSubject: BehaviorSubject<User>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.me$ = fromEvent<User>(socket, 'me');
    this.meSubject = new BehaviorSubject<User>({
      id: '',
      name: '',
    });

    this.me$.subscribe({
      next: (v) => this.meSubject.next(v),
    });
  }

  public updateUsername = (name: string) =>
    this.socket.emit('updateUsername', name);
}
