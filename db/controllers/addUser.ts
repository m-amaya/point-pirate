import generateName from 'sillyname';
import { UserModel } from '../models/User';

export async function addUser(id: string) {
  const newUser = {
    _id: id,
    name: generateName(),
  };

  try {
    const user = await UserModel.create(newUser);
    const userJson = user.toJSON();
    console.log('✔ Added user:', userJson);
    return { id: userJson.id, name: userJson.name };
  } catch (err) {
    console.log('✘ Error adding user:', err);
  }
}
