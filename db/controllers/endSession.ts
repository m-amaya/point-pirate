import { Session } from '../models/_types';
import { SessionModel } from '../models/Session';
import { fitSession } from '../utils/session';

/**
 * Update end time on a specified vote session.
 * @param sessionId Vote session to end
 * @returns Updated vote session
 */
export async function endSession(sessionId: string): Promise<Session> {
  try {
    let s = await SessionModel.findById(sessionId);
    s.endDate = Date.now();
    s = await s.save();

    const session = fitSession(s);
    console.log(`✔ Ended session:`, session);
    return session;
  } catch (err) {
    console.log(`✘ Error ending session #${sessionId}:`, err);
  }
}
