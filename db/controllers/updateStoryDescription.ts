import { Session } from '../models/_types';

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
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
