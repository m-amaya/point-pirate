import { Schema, Types, model } from 'mongoose';

const schema = new Schema({
  name: String,
  members: [Types.ObjectId],
  sessions: [Types.ObjectId],
});

export const RoomModel = model('Room', schema);
