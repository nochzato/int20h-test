import mongoose from 'mongoose';
import { IList } from '../common/types';

const listSchema = new mongoose.Schema<IList>({
  title: String,
  recipes: [String],
  uid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const List = mongoose.model<IList>('List', listSchema);
