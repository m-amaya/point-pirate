import { Schema, Types, model } from 'mongoose';

const schema = new Schema({
  _id: String,
  name: String,
  inRoom: Types.ObjectId,
});

export const UserModel = model('User', schema);
