import { Document, Schema, Types, model } from 'mongoose';

export interface RoomDocument extends Document {
  name: string;
  members: Types.ObjectId[];
  sessions: Types.ObjectId[];
  createdAt: number;
}

const schema = new Schema({
  name: String,
  members: [Types.ObjectId],
  sessions: [Types.ObjectId],
  createdAt: Date,
});

export const RoomModel = model<RoomDocument>('Room', schema);
