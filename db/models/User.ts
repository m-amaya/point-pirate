import { Document, Schema, Types, model } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  inRoom: Types.ObjectId;
  createdAt: number;
}

const schema = new Schema({
  name: String,
  inRoom: Types.ObjectId,
  createdAt: Date,
});

export const UserModel = model<UserDocument>('User', schema);
