import { Schema, Types, model } from 'mongoose';

const schema = new Schema({
  name: String,
  members: [Types.ObjectId],
  sessions: [Types.ObjectId],
  createdAt: Date,
});

export const RoomModel = model('Room', schema);
