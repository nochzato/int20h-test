import mongoose from 'mongoose';
import { IList } from '../common/types';
import { RecipeIdAndTitle } from '../common/types';

const recipeIdAndTitleSchema = new mongoose.Schema<RecipeIdAndTitle>({
  id: String,
  title: String,
});

const listSchema = new mongoose.Schema<IList>({
  title: String,
  recipes: [recipeIdAndTitleSchema],
  uid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const List = mongoose.model<IList>('List', listSchema);
