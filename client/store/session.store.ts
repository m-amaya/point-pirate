import { BehaviorSubject, fromEvent } from 'rxjs';
import { User } from './user.store';

export type SessionState = 'start' | 'vote' | 'results';

export interface Vote {
  user: User;
  points: number;
}

export interface Session {
  id: string;
  storyDescription: string;
  startDate: string | null;
  endDate: string | null;
  votes: Vote[];
  inRoom: string;
  createdAt: string | null;
  state?: SessionState;
}

export const INIT_SESSION: Session = {
  id: '',
  storyDescription: '',
  startDate: null,
  endDate: null,
  votes: [],
  inRoom: '',
  createdAt: null,
};

export interface RoomDetail {
  id: string;
  name: string;
  members: User[];
  sessions: Session[];
  createdAt: string | null;
}

export const INIT_ROOM: RoomDetail = {
  id: '',
  name: '',
  members: [],
  sessions: [],
  createdAt: null,
};

export class SessionStore {
  private socket: SocketIOClient.Socket;
  public inRoom$: BehaviorSubject<RoomDetail>;
  public inSession$: BehaviorSubject<Session>;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
    this.inRoom$ = new BehaviorSubject<RoomDetail>(INIT_ROOM);
    this.inSession$ = new BehaviorSubject<Session>(INIT_SESSION);

    const inRoomChannel$ = fromEvent<RoomDetail>(socket, 'room:current');
    const inSessionChannel$ = fromEvent<Session>(socket, 'session:current');

    inRoomChannel$.subscribe({
      next: (room) => this.inRoom$.next(room),
    });

    inSessionChannel$.subscribe({
      next: (session) => {
        const state: SessionState =
          session.startDate && session.endDate
            ? 'results'
            : session.startDate
            ? 'vote'
            : 'start';

        this.inSession$.next({ ...session, state });
      },
    });
  }

  public addSession = (roomId: string) =>
    this.socket.emit('session:add', roomId);

  public updateDescription = (sessionId: string, description: string) =>
    this.socket.emit('session:description:update', sessionId, description);

  public startSession = (sessionId: string) =>
    this.socket.emit('session:start', sessionId);

  public vote = (sessionId: string, points: number) =>
    this.socket.emit('session:vote', sessionId, points);

  public endSession = (sessionId: string) =>
    this.socket.emit('session:end', sessionId);

  public redoSession = (sessionId: string) =>
    this.socket.emit('session:redo', sessionId);
}
