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

export const fitVote = (u: UserDocument, points: number): Vote => ({
  user: fitUser(u),
  points,
});

export const fitSession = async (s: SessionDocument): Promise<Session> => {
  const votes: Promise<Vote>[] = s.votes.map(
    async ({ userId, points }): Promise<Vote> => {
      const u = await UserModel.findById(userId);
      return fitVote(u, points);
    },
  );

  return {
    id: s._id,
    storyDescription: s.storyDescription,
    startDate: s.startDate,
    endDate: s.endDate,
    votes: await Promise.all(votes),
    inRoom: s.inRoom.toString(),
    createdAt: s.createdAt,
  };
};
