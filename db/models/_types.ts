export interface User {
  id: string;
  name: string;
  inRoom: string | null;
  createdAt: number;
}

export interface Vote {
  user: User;
  point: number;
}

export interface Session {
  id: string;
  storyDescription: string;
  startDate: number;
  endDate: number;
  votes: Vote[];
  inRoom: string;
  createdAt: number;
}

export interface Room {
  id: string;
  name: string;
  members: User[];
  sessions: Session[];
  createdAt: number;
}
