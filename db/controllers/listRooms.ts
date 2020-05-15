import { RoomModel } from '../models/Room';

export async function listRooms() {
  try {
    const rooms = await RoomModel.find().sort('-createdAt');
    const roomsJson = rooms.map((room) => {
      const { _id, name, members } = room.toJSON();

      return {
        id: _id,
        name,
        isActive: members.length > 0,
      };
    });
    return roomsJson;
  } catch (err) {
    console.log('✘ Error retrieving rooms:', err);
  }
}
