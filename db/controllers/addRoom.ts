import { Room } from '../models/_types';
import { RoomModel } from '../models/Room';
import { createRoom, fitRoom } from './utils/room';

/**
 * Create new room.
 * @param name Name of room
 * @returns New room
 */
export async function addRoom(name: string): Promise<Room> {
  try {
    const room = createRoom(name);
    const r = await RoomModel.create(room);
    const roomJson = await fitRoom(r);
    console.log('✔ Added room:', roomJson);
    return roomJson;
  } catch (err) {
    console.log('✘ Error adding room:', err);
  }
}
