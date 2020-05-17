import { Room } from '../models/_types';
import { RoomModel } from '../models/Room';
import { fitRoom } from '../utils/room';

/**
 * List all rooms.
 * @returns List of rooms
 */
export async function listRooms(): Promise<Room[]> {
  try {
    const rList = await RoomModel.find().sort('-createdAt');
    const rooms = await rList.map(fitRoom);
    return Promise.all(rooms);
  } catch (err) {
    console.log('✘ Error retrieving rooms:', err);
  }
}
