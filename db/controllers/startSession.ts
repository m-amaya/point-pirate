import { Session } from '../models/_types';
import { SessionModel } from '../models/Session';
import { fitSession } from '../utils/session';

/**
 * Update start time on a specified vote session.
 * @param sessionId Vote session to start
 * @returns Updated vote session
 */
export async function startSession(sessionId: string): Promise<Session> {
  try {
    let s = await SessionModel.findById(sessionId);
    s.startDate = Date.now();
    s = await s.save();

    const session = await fitSession(s);
    console.log(`✔ Started session:`, session);
    return session;
  } catch (err) {
    console.log(`✘ Error starting session #${sessionId}:`, err);
  }
}
