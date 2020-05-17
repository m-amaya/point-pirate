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
    async (memberId: string): Promise<User> => {
      const u = await UserModel.findById(memberId);
      return fitUser(u);
    },
  );

  const sessions: Promise<Session>[] = r.sessions.map(
    async (sessionId: string): Promise<Session> => {
      const s = await SessionModel.findById(sessionId);
      return await fitSession(s);
    },
  );

  return {
    id: r._id,
    name: r.name,
    members: await Promise.all(members),
    sessions: await Promise.all(sessions),
    createdAt: r.createdAt,
  };
};