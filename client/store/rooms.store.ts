import { BehaviorSubject, fromEvent, Observable } from 'rxjs';

export interface Room {
  id: string;
  name: string;
  isActive: boolean;
}

export class RoomsStore {
  private socket: SocketIOClient.Socket;
  private listRooms$: Observable<Room[]>;

  public listSubject: BehaviorSubject<Room[]>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.listRooms$ = fromEvent<Room[]>(socket, 'listRooms');
    this.listSubject = new BehaviorSubject<Room[]>([]);

    this.listRooms$.subscribe({
      next: (v) => this.listSubject.next(v),
    });
  }

  public addRoom = (roomName: string) => this.socket.emit('addRoom', roomName);

  public joinRoom = (roomId: string) => this.socket.emit('joinRoom', roomId);

  public removeRoom = (roomId: string) =>
    this.socket.emit('removeRoom', roomId);
}
