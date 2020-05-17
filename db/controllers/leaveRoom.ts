import { Types } from 'mongoose';

/**
 * Remove User from members in all rooms. Remove user's current room.
 * @param userId User to leave rooms
 * @returns [Updated room, Updated user]
 */
export async function leaveRoom(userId: Types.ObjectId) {
  console.log('userId:', userId);
}
