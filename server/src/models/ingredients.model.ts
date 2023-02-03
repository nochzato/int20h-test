import mongoose from 'mongoose';
import { ingredients } from '../common/types';

const ingredientSchema = new mongoose.Schema<ingredients>({
  ingredients: [String],
});

export const Ingredient = mongoose.model<ingredients>(
  'Ingredient',
  ingredientSchema
);
