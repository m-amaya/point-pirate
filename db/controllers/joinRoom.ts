import { equals, not } from 'ramda';
import { Room, User } from '../models/_types';
import { RoomModel } from '../models/Room';
import { UserModel } from '../models/User';
import { fitRoom } from '../utils/room';
import { fitUser } from '../utils/user';

/**
 * Add User to room members. Update user's current room.
 * @param roomId Room the user wants to join
 * @param userId User to join room
 * @returns [Updated room, Updated user]
 */
export async function joinRoom(
  roomId: string,
  userId: string,
): Promise<[Room, User]> {
  try {
    let r = await RoomModel.findById(roomId);
    let u = await UserModel.findById(userId);

    if (not(equals(u.inRoom, roomId))) {
      // User has not joined
      r.members = [...r.members, userId];
      u.inRoom = roomId;
      r = await r.save();
      u = await u.save();
    }

    const room = await fitRoom(r);
    const user = fitUser(u);

    console.log(
      `✔ User '${user.name}' joined room '${room.name}':`,
      room,
      user,
    );
    return [room, user];
  } catch (err) {
    console.log(`✘ Error with user #${userId} joining room #${roomId}:`, err);
  }
}
