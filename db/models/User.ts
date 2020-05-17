import { Document, Schema, Types, model } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  inRoom: string;
  createdAt: number;
}

const schema = new Schema({
  _id: String,
  name: String,
  inRoom: Types.ObjectId,
  createdAt: Date,
});

export const UserModel = model<UserDocument>('User', schema);
