import { UserModel } from '../models/User';

/**
 * Remove specified user.
 * @param userId User to remove
 * @returns Removed room
 */
export async function removeUser(userId: string) {
  try {
    const user = await UserModel.findByIdAndDelete(userId);
    console.log('✔ Removed user:', user);
    return;
  } catch (err) {
    console.log('✘ Error removing user:', err);
  }
}
