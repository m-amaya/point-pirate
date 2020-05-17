import { Document, Schema, Types, model, Model } from 'mongoose';

interface VoteModelDocument {
  userId: string;
  point: number;
}

interface VoteSessionDocument {
  storyDescription: string;
  startTime: number;
  endTime: number;
  votes: VoteModelDocument[];
  createdAt: number;
}

const schema = new Schema<VoteSessionDocument>({
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

export const VoteSessionModel = model('VoteSession', schema);
