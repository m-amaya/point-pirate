import { includes, not } from 'ramda';
import { Room, User } from '../models/_types';
import { RoomModel } from '../models/Room';
import { UserModel } from '../models/User';

/**
 * Add User to room members. Update user's current room.
 * @param roomId Room the user wants to join
 * @param userId User to join room
 * @returns [Updated room, Updated user]
 */
export async function joinRoom(
  roomId: string,
  userId: string,
): Promise<{ 0: Room; 1: User }> {
  try {
    let r = await RoomModel.findById(roomId);
    let rJson = r.toJSON();

    if (not(includes(userId, rJson.members))) {
      // User has not joined
      const members = [...rJson.members, userId];
      r = await
    }

    // let room = await RoomModel.findById(roomId);
    // const roomJson = room.toJSON();
    // if (not(includes(userId, roomJson.members))) {
    //   console.log('not joined');
    //   const members = [...roomJson.members, userId];
    //   room = await RoomModel.findByIdAndUpdate(roomId, {
    //     members,
    //   });
    // }
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
