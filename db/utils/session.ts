import { Document } from 'mongoose';
import { Vote, Session } from '../models/_types';
import { UserDocument, UserModel } from '../models/User';
import { SessionDocument } from '../models/Session';
import { fitUser } from './user';

export const createSession = (roomId: string): Partial<Session> => ({
  storyDescription: '',
  inRoom: roomId,
  createdAt: Date.now(),
});

export const fitVote = (u: UserDocument, point: number): Vote => ({
  user: fitUser(u),
  point,
});

export const fitSession = async (s: SessionDocument): Promise<Session> => {
  const session = s.toJSON();
  const votes: Promise<Vote>[] = session.votes.map(
    async ({ userId, point }): Promise<Vote> => {
      const u = await UserModel.findById(userId);
      return fitVote(u, point);
    },
  );

  return {
    id: session._id,
    storyDescription: session.storyDescription,
    startDate: session.startDate,
    endDate: session.endDate,
    votes: await Promise.all(votes),
    inRoom: session.inRoom,
    createdAt: session.createdAt,
  };
};
