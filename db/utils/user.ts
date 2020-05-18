import { User } from '../models/_types';
import { UserDocument } from '../models/User';

export const createUser = (name: string): Partial<User> => ({
  name,
  inRoom: null,
  createdAt: Date.now(),
});

export const fitUser = (u: UserDocument): User => ({
  id: u._id,
  name: u.name,
  inRoom: u.inRoom ? u.inRoom.toString() : null,
  createdAt: u.createdAt,
});
