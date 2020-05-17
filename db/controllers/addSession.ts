import { Room, Session } from '../models/_types';
import { RoomModel } from '../models/Room';
import { SessionModel } from '../models/Session';
import { fitRoom } from '../utils/room';
import { createSession, fitSession } from '../utils/session';

/**
 * Create a vote session. Add session to room.
 * @param roomId Room to add vote session
 * @returns [New vote session, Updated room]
 */
export async function addSession(roomId: string): Promise<[Session, Room]> {
  try {
    const newSession = createSession(roomId);
    const s = await SessionModel.create(newSession);

    let r = await RoomModel.findById(roomId);
    r.sessions = [...r.sessions, s.id];
    r = await r.save();

    const session = await fitSession(s);
    const room = await fitRoom(r);

    console.log(
      `✔ Added session #${session.id} to room #${roomId}:`,
      session,
      room,
    );
    return [session, room];
  } catch (err) {
    console.log(`✘ Error adding session to room #${roomId}:`, err);
  }
}
