import { Document } from 'mongoose';
import { Vote, VoteSession } from '../../models/_types';
import { UserModel } from '../../models/User';
import { fitUser } from './user';

export const createVoteSession = (roomId: string): Partial<VoteSession> => ({
  storyDescription: '',
  inRoom: roomId,
  createdAt: Date.now(),
});

export const fitVote = (u: Document, point: number): Vote => ({
  user: fitUser(u),
  point,
});

export const fitVoteSession = async (v: Document): Promise<VoteSession> => {
  const voteSession = v.toJSON();
  const votes: Promise<Vote>[] = voteSession.votes.map(
    async ({ userId, point }): Promise<Vote> => {
      const u = await UserModel.findById(userId);
      return fitVote(u, point);
    },
  );

  return {
    id: voteSession._id,
    storyDescription: voteSession.storyDescription,
    startDate: voteSession.startDate,
    endDate: voteSession.endDate,
    votes: await Promise.all(votes),
    inRoom: voteSession.inRoom,
    createdAt: voteSession.createdAt,
  };
};
