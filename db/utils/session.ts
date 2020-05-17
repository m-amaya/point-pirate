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
  const votes: Promise<Vote>[] = s.votes.map(
    async ({ userId, point }): Promise<Vote> => {
      const u = await UserModel.findById(userId);
      return fitVote(u, point);
    },
  );

  return {
    id: s._id,
    storyDescription: s.storyDescription,
    startDate: s.startDate,
    endDate: s.endDate,
    votes: await Promise.all(votes),
    inRoom: s.inRoom,
    createdAt: s.createdAt,
  };
};
