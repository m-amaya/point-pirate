import { Room } from '../models/_types';
import { RoomModel } from '../models/Room';
import { fitRoom } from './utils/room';

/**
 * Remove specified room.
 * @param roomId Room to remove
 * @returns Removed room
 */
export async function removeRoom(roomId: string): Promise<Room> {
  try {
    const r = await RoomModel.findByIdAndDelete(roomId);
    const roomJson = await fitRoom(r);
    console.log('✔ Removed room:', roomJson);
    return roomJson;
  } catch (err) {
    console.log('✘ Error removing room:', err);
  }
}
