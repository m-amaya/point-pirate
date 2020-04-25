import { UserModel } from '../models/User';

export async function removeUser(id: string) {
  try {
    const user = await UserModel.findByIdAndDelete(id);
    console.log('✔ Removed user:', user);
    return;
  } catch (err) {
    console.log('✘ Error removing user:', err);
  }
}
