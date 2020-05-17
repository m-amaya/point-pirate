import { User } from '../models/_types';
import { UserDocument } from '../models/User';

export const createUser = (id: string, name: string): User => ({
  id,
  name,
  inRoom: null,
  createdAt: Date.now(),
});

export const fitUser = (u: UserDocument): User => ({
  id: u._id,
  name: u.name,
  inRoom: u.inRoom,
  createdAt: u.createdAt,
});
