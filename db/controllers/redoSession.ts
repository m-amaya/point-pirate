import { filter } from 'ramda';
import { Room, Session } from '../models/_types';
import { RoomModel } from '../models/Room';
import { SessionModel } from '../models/Session';
import { addSession } from './addSession';

/**
 * Remove specified vote session and create another. Add new session to room.
 * @param sessionId Vote session to retake
 * @returns [New vote session, Updated room]
 */
export async function redoSession(
  sessionId: string,
): Promise<{ 0: Session; 1: Room }> {
  try {
    let s = await SessionModel.findByIdAndDelete(sessionId);
    let r = await RoomModel.findById(s.inRoom);

    r.sessions = filter((sessionId) => sessionId !== s.id, r.sessions);
    r = await r.save();

    console.log(`✔ Removed session #${sessionId} from room #${r.id}`);
    return addSession(r.id);
  } catch (err) {
    console.log(`✘ Error re-doing session #${sessionId}:`, err);
  }
}
