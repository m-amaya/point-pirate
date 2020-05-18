import { filter } from 'ramda';
import { Room, User } from '../models/_types';
import { RoomModel } from '../models/Room';
import { UserModel } from '../models/User';
import { fitRoom } from '../utils/room';
import { fitUser } from '../utils/user';

/**
 * Remove User from members in all rooms. Remove user's current room.
 * @param userId User to leave rooms
 * @returns [Updated room, Updated user]
 */
export async function leaveRoom(
  userId: string,
): Promise<[Partial<Room>, User]> {
  try {
    let u = await UserModel.findById(userId);
    let room: Partial<Room> = {};

    if (u.inRoom) {
      let r = await RoomModel.findById(u.inRoom);

      u.inRoom = null;
      r.members = filter(
        (memberId) => memberId.toString() !== u.id.toString(),
        r.members,
      );

      u = await u.save();
      r = await r.save();
      room = await fitRoom(r);
    }

    const user = fitUser(u);
    console.log(`✔ User '${user.name}' left room '${room.name}':`, room, user);
    return [room, user];
  } catch (err) {
    console.log(`✘ Error with user #${userId} leaving room`, err);
  }
}
