import { Session } from '../models/_types';

/**
 * Create a vote session.
 * @param roomId Room to add vote session
 * @returns New vote session
 */
export async function addSession(roomId: string): Promise<Session> {
  try {
    console.log(`✔ :`);
    return;
  } catch (err) {
    console.log(`✘ Error :`, err);
  }
}
