import { Session } from '../models/_types';

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
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
