import { Schema, Types, model } from 'mongoose';

const schema = new Schema({
  _id: String,
  name: String,
  inRoom: Types.ObjectId,
  createdAt: Date,
});

export const UserModel = model('User', schema);
