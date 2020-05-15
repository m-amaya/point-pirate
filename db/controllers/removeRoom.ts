import { RoomModel } from '../models/Room';

export async function removeRoom(id: string) {
  try {
    const room = await RoomModel.findByIdAndDelete(id);
    console.log('✔ Removed room:', room);
    return;
  } catch (err) {
    console.log('✘ Error removing room:', err);
  }
}
