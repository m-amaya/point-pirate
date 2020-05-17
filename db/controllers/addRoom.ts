import { Room } from '../models/_types';
import { RoomModel } from '../models/Room';
import { createRoom, fitRoom } from '../utils/room';

/**
 * Create new room.
 * @param name Name of room
 * @returns New room
 */
export async function addRoom(name: string): Promise<Room> {
  try {
    const newRoom = createRoom(name);
    const r = await RoomModel.create(newRoom);
    const room = await fitRoom(r);
    console.log('✔ Added room:', room);
    return room;
  } catch (err) {
    console.log('✘ Error adding room:', err);
  }
}
