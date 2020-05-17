import { Session } from '../models/_types';

/**
 * Remove specified vote session and create another.
 * @param sessionId Vote session to retake
 * @returns New vote session
 */
export async function redoSession(sessionId: string): Promise<Session> {
  try {
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
