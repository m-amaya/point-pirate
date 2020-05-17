import { RoomModel } from '../models/Room';

/**
 * Create new room.
 * @param name Name of room
 * @returns New room
 */
export async function addRoom(name: string) {
  const newRoom = {
    name,
    members: [],
    sessions: [],
    createdAt: Date.now(),
  };

  try {
    const room = await RoomModel.create(newRoom);
    const roomJson = room.toJSON();
    console.log('✔ Added room:', roomJson);
  } catch (err) {
    console.log('✘ Error adding room:', err);
  }
}
