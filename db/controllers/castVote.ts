import { filter, includes, not, pluck } from 'ramda';
import { Session } from '../models/_types';
import { SessionModel } from '../models/Session';
import { fitSession } from '../utils/session';

/**
 * Add a vote or update a user's existing vote with story points in a specified vote session.
 * @param sessionId Vote session to vote in
 * @param userId User casting vote
 * @param points Story points voted on
 * @returns Updated vote session
 */
export async function castVote(
  sessionId: string,
  userId: string,
  points: number,
): Promise<Session> {
  try {
    let s = await SessionModel.findById(sessionId);
    const usersVoted = pluck('userId', s.votes);
    if (not(includes(userId, usersVoted))) {
      // User has not voted yet
      s.votes = [...s.votes, { userId, points }];
    } else {
      // User has already voted
      s.votes = [
        ...filter((v) => v.userId !== userId, s.votes),
        { userId, points },
      ];
    }

    s = await s.save();
    const session = fitSession(s);
    console.log(`✔ User #${userId} casted vote:`, session);
    return session;
  } catch (err) {
    console.log(
      `✘ Error with user #${userId} casting vote in session #${sessionId}:`,
      err,
    );
  }
}
