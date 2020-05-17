import { Document, Schema, Types, model } from 'mongoose';

export interface SessionDocument extends Document {
  storyDescription: string;
  startTime: number;
  endTime: number;
  votes: {
    userId: string;
    point: number;
  }[];
  createdAt: number;
}

const schema = new Schema({
  storyDescription: String,
  startTime: Date,
  endTime: Date,
  votes: [
    {
      userId: Types.ObjectId,
      point: Number,
    },
  ],
  createdAt: Date,
});

export const SessionModel = model<SessionDocument>('Session', schema);
