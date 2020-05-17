import { Document } from 'mongoose';
import { Room, User, VoteSession } from '../../models/_types';
import { UserModel } from '../../models/User';
import { VoteSessionModel } from '../../models/VoteSession';
import { fitUser } from './user';
import { fitVoteSession } from './vote';

export const createRoom = (name: string): Partial<Room> => ({
  name,
  members: [],
  sessions: [],
  createdAt: Date.now(),
});

export const fitRoom = async (r: Document): Promise<Room> => {
  const room = r.toJSON();

  const members: Promise<User>[] = room.members.map(
    async (memberId: string): Promise<User> => {
      const u = await UserModel.findById(memberId);
      return fitUser(u);
    },
  );

  const sessions: Promise<VoteSession>[] = room.sessions.map(
    async (sessionId: string): Promise<VoteSession> => {
      const v = await VoteSessionModel.findById(sessionId);
      return await fitVoteSession(v);
    },
  );

  return {
    id: room._id,
    name: room.name,
    members: await Promise.all(members),
    sessions: await Promise.all(sessions),
    createdAt: room.createdAt,
  };
};
