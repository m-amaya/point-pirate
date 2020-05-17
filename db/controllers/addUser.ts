import generateName from 'sillyname';
import { UserModel } from '../models/User';

interface User {
  id: string;
  name: string;
}

/**
 * Create new user.
 * @param userId Socket id
 * @returns New user
 */
export async function addUser(userId: string): Promise<User> {
  const newUser = {
    _id: userId,
    name: generateName(),
  };

  try {
    const user = await UserModel.create(newUser);
    const userJson = user.toJSON();
    console.log('✔ Added user:', userJson);
    return { id: userJson._id, name: userJson.name };
  } catch (err) {
    console.log('✘ Error adding user:', err);
  }
}
