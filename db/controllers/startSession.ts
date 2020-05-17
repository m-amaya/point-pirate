import { Session } from '../models/_types';

/**
 * Update start time on a specified vote session.
 * @param sessionId Vote session to start
 * @returns Updated vote session
 */
export async function startSession(sessionId: string): Promise<Session> {
  try {
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
