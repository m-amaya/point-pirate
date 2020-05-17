import { Session } from '../models/_types';

/**
 * Update end time on a specified vote session.
 * @param sessionId Vote session to end
 * @returns Updated vote session
 */
export async function endSession(sessionId: string): Promise<Session> {
  try {
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
