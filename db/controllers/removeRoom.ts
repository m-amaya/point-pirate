import { Types } from 'mongoose';
import { RoomModel } from '../models/Room';

/**
 * Remove specified room.
 * @param roomId Room to remove
 * @returns Removed room
 */
export async function removeRoom(roomId: string) {
  try {
    const room = await RoomModel.findByIdAndDelete(roomId);
    console.log('✔ Removed room:', room);
    return;
  } catch (err) {
    console.log('✘ Error removing room:', err);
  }
}
