import { User } from '../models/_types';
import { UserModel } from '../models/User';
import { fitUser } from '../utils/user';

/**
 * Update user's name.
 * @param userId User to update
 * @param name New name
 * @returns Updated user
 */
export async function updateUsername(
  userId: string,
  name: string,
): Promise<User> {
  try {
    let u = await UserModel.findById(userId);
    u.name = name;
    u = await u.save();

    const user = fitUser(u);
    console.log('✔ Updated username:', user);
    return user;
  } catch (err) {
    console.log('✘ Error updating username:', err);
  }
}
