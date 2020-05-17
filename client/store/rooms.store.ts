import { BehaviorSubject, fromEvent } from 'rxjs';
import { RoomDetail } from './session.store';

export interface Room {
  id: string;
  name: string;
  isActive: boolean;
}

export class RoomsStore {
  private socket: SocketIOClient.Socket;
  public list$: BehaviorSubject<Room[]>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.list$ = new BehaviorSubject<Room[]>([]);

    const listChannel$ = fromEvent<RoomDetail[]>(socket, 'room:list');

    listChannel$.subscribe({
      next: (l) =>
        this.list$.next(
          l.map(({ id, name, members }) => ({
            id,
            name,
            isActive: members.length > 0,
          })),
        ),
    });
  }

  public addRoom = (roomName: string) => this.socket.emit('room:add', roomName);

  public joinRoom = (roomId: string) => this.socket.emit('room:join', roomId);

  public leaveRoom = () => this.socket.emit('room:leave');

  public removeRoom = (roomId: string) =>
    this.socket.emit('removeRoom', roomId);
}
