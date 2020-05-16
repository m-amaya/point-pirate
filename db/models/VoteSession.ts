import { Schema, Types, model } from 'mongoose';

const schema = new Schema({
  storyDescription: String,
  startTime: Date,
  endTime: Date,
  votes: [
    {
      userId: Types.ObjectId,
      value: Number,
    },
  ],
  createdAt: Date,
});

export const VoteSessionModel = model('VoteSession', schema);
