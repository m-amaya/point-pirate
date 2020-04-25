import generateName from 'sillyname';
import { UserModel } from '../models/User';

export async function addUser(id: string) {
  const newUser = {
    _id: id,
    name: generateName(),
  };

  try {
    const user = await UserModel.create(newUser);
    console.log('✔ Added user:', user);
    return user;
  } catch (err) {
    console.log('✘ Error adding user:', err);
  }
}
