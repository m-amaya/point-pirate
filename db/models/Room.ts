import { Schema, Types, model } from 'mongoose';

export interface Room {
  id: string;
  name: string;
  members: [];
  sessions: [];
}

const schema = new Schema({
  name: String,
  members: [Types.ObjectId],
  sessions: [Types.ObjectId],
  createdAt: Date,
});

export const RoomModel = model('Room', schema);
