import { User } from '../models/_types';
import { UserModel } from '../models/User';
import { fitUser } from '../utils/user';

/**
 * Remove specified user.
 * @param userId User to remove
 * @returns Removed room
 */
export async function removeUser(userId: string): Promise<User> {
  try {
    const u = await UserModel.findByIdAndDelete(userId);
    const user = fitUser(u);
    console.log('✔ Removed user:', user);
    return user;
  } catch (err) {
    console.log('✘ Error removing user:', err);
  }
}
