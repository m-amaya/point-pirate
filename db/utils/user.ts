import { User } from '../models/_types';
import { UserDocument } from '../models/User';

export const createUser = (id: string, name: string): User => ({
  id,
  name,
  inRoom: null,
  createdAt: Date.now(),
});

export const fitUser = (u: UserDocument): User => {
  const user = u.toJSON();

  return {
    id: user._id,
    name: user.name,
    inRoom: user.inRoom || null,
    createdAt: user.createdAt,
  };
};
