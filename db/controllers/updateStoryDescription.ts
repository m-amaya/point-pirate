import { Session } from '../models/_types';
import { SessionModel } from '../models/Session';
import { fitSession } from '../utils/session';

/**
 * Update story description in a specified vote session.
 * @param sessionId Session to update
 * @param description New story description
 * @returns Updated vote session
 */
export async function updateStoryDescription(
  sessionId: string,
  description: string,
): Promise<Session> {
  try {
    let s = await SessionModel.findById(sessionId);
    s.storyDescription = description;
    s = await s.save();

    const session = await fitSession(s);
    console.log(`✔ Updated story description:`, session);
    return session;
  } catch (err) {
    console.log(`✘ Error updating description in session #${sessionId}:`, err);
  }
}
