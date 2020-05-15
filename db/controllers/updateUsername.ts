import { UserModel } from '../models/User';

export async function updateUsername(userId: string, name: string) {
  try {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { name },
      { new: true },
    );
    const userJson = user.toJSON();
    console.log('✔ Updated username:', userJson);
  } catch (err) {
    console.log('✘ Error updating username:', err);
  }
}
