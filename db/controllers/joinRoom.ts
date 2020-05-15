import { RoomModel } from '../models/Room';

export async function joinRoom(roomId: string, userId: string) {
  try {
    const room = await RoomModel.findById(roomId);
    const roomJson = room.toJSON();
    roomJson.members = [...roomJson.members, userId];
    await RoomModel.findByIdAndUpdate(roomId, { members: roomJson.members });
    console.log(`✔ User #${userId} joined room #${roomId}`);
  } catch (err) {
    console.log(`✘ Error with user #${userId} joining room #${roomId}:`, err);
  }
}
