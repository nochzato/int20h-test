import { Request, Response } from 'express';
import _ from 'lodash';
import { MongooseError } from 'mongoose';
import { Ingredients } from '../common/types';
import { Ingredient } from '../models/ingredients.model';

export const getIngredients = (req: Request, res: Response): void => {
  Ingredient.find({}, (_: MongooseError, ingredients: Array<Ingredients>) => {
    res.send({ ingredients: ingredients[0].ingredients });
  });
};

export const getIngredientsByQuery = (req: Request, res: Response): void => {
  const query: string = _.startCase(req.params.query);
  Ingredient.find({}, (_: MongooseError, ingredients: Array<Ingredients>) => {
    const foundIngredients: Array<string> = ingredients[0].ingredients.filter(
      (ingredient: string) => {
        return ingredient.includes(query);
      }
    );
    res.send({ ingredients: foundIngredients });
  });
};
