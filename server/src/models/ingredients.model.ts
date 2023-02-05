import mongoose from 'mongoose';
import { Ingredients } from '../common/types';

const ingredientSchema = new mongoose.Schema<Ingredients>({
  ingredients: [String],
});

export const Ingredient = mongoose.model<Ingredients>(
  'Ingredient',
  ingredientSchema
);
