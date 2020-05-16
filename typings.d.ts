interface User {
  id: string;
  name: string;
}

interface Vote {
  user: User;
  value: number;
}

interface VoteSession {
  id: string;
  storyDescription: string;
  startTime: Date;
  endTime: Date;
  votes: Vote[];
}

interface Room {
  id: string;
  name: string;
  members: User[];
  sessions: VoteSession[];
}
