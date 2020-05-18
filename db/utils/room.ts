import { sort } from 'ramda';
import { Room, User, Session } from '../models/_types';
import { RoomDocument } from '../models/Room';
import { SessionModel } from '../models/Session';
import { UserModel } from '../models/User';
import { fitSession } from './session';
import { fitUser } from './user';

export const createRoom = (name: string): Partial<Room> => ({
  name,
  members: [],
  sessions: [],
  createdAt: Date.now(),
});

export const fitRoom = async (r: RoomDocument): Promise<Room> => {
  const members: Promise<User>[] = r.members.map(
    async (memberId): Promise<User> => {
      const u = await UserModel.findById(memberId);
      return fitUser(u);
    },
  );

  const sessions: Promise<Session>[] = r.sessions.map(
    async (sessionId): Promise<Session> => {
      const s = await SessionModel.findById(sessionId);
      return await fitSession(s);
    },
  );

  const sortedSessions = sort(
    (sA, sB) => sB.createdAt - sA.createdAt,
    await Promise.all(sessions),
  );

  return {
    id: r._id,
    name: r.name,
    members: await Promise.all(members),
    sessions: sortedSessions,
    createdAt: r.createdAt,
  };
};
