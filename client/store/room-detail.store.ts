import { BehaviorSubject, fromEvent, Observable } from 'rxjs';

export interface RoomDetail {
  id: string;
  name: string;
  members: [];
  sessions: [];
}

const INIT_ROOM: RoomDetail = {
  id: '',
  name: '',
  members: [],
  sessions: [],
};

export class RoomDetailStore {
  private socket: SocketIOClient.Socket;
  private inRoom$: Observable<RoomDetail>;

  public inRoomSubject: BehaviorSubject<RoomDetail>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.inRoom$ = fromEvent<RoomDetail>(socket, 'inRoom');
    this.inRoomSubject = new BehaviorSubject<RoomDetail>(INIT_ROOM);

    this.inRoom$.subscribe({
      next: (r) => this.inRoomSubject.next(r || INIT_ROOM),
    });
  }

  public joinRoom = (roomId: string) => this.socket.emit('joinRoom', roomId);

  public leaveRoom = () => this.socket.emit('leaveRoom');
}
