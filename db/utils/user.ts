import { User } from '../models/_types';
import { UserDocument } from '../models/User';

interface NewUser extends Partial<User> {
  _id: string;
}

export const createUser = (id: string, name: string): NewUser => ({
  _id: id,
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
