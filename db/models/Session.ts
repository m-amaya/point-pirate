import { Document, Schema, Types, model } from 'mongoose';

export interface SessionDocument extends Document {
  storyDescription: string;
  startDate: number;
  endDate: number;
  votes: {
    userId: string;
    point: number;
  }[];
  inRoom: string;
  createdAt: number;
}

const schema = new Schema({
  storyDescription: String,
  startDate: Date,
  endDate: Date,
  votes: [
    {
      userId: Types.ObjectId,
      point: Number,
    },
  ],
  inRoom: Types.ObjectId,
  createdAt: Date,
});

export const SessionModel = model<SessionDocument>('Session', schema);
