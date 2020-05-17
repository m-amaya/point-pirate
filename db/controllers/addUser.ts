import generateName from 'sillyname';
import { User } from '../models/_types';
import { UserModel } from '../models/User';
import { createUser, fitUser } from '../utils/user';

/**
 * Create new user.
 * @param userId Socket id
 * @returns New user
 */
export async function addUser(userId: string): Promise<User> {
  try {
    const newUser = createUser(userId, generateName());
    const u = await UserModel.create(newUser);
    const user = fitUser(u);
    console.log('✔ Added user:', user);
    return user;
  } catch (err) {
    console.log('✘ Error adding user:', err);
  }
}
