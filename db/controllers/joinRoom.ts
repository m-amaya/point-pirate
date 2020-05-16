import { includes, not } from 'ramda';
import { RoomModel } from '../models/Room';
import { UserModel } from '../models/User';

interface Room {
  id: string;
  name: string;
  members: string[];
  sessions: string[];
}

export async function joinRoom(roomId: string, userId: string) {
  try {
    let room = await RoomModel.findById(roomId);
    const roomJson = room.toJSON();

    if (not(includes(userId, roomJson.members))) {
      console.log('not joined');
      const members = [...roomJson.members, userId];
      room = await RoomModel.findByIdAndUpdate(roomId, {
        members,
      });
    }

    // if (not(includes(userId, roomJson.members))) {
    //   roomJson.members = [...roomJson.members, userId];
    //   const updatedRoom = await RoomModel.findByIdAndUpdate(roomId, {
    //     members: roomJson.members,
    //   });
    //   const updatedRoomJson = updatedRoom.toJSON();
    //   console.log(`✔ User #${userId} joined room #${roomId}`);
    // }
  } catch (err) {
    console.log(`✘ Error with user #${userId} joining room #${roomId}:`, err);
  }
}
