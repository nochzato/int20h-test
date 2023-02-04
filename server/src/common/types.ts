import mongoose from 'mongoose';
export interface Ingredients {
  ingredients: Array<string>;
}

export interface IList {
  title: string;
  recipes: Array<string>;
  uid: mongoose.Schema.Types.ObjectId;
}

export interface IngredientWithMeasure {
  ingredient: string;
  measure: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface JwtPayload {
  email: string;
  iat: string;
  exp: string;
}
