import { Schema, model } from 'mongoose';

const schema = new Schema({
  _id: String,
  name: String,
  createdAt: Date,
});

export const UserModel = model('User', schema);
