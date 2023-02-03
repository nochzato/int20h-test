import _ from 'lodash';
import { Request, Response } from 'express';
import { MongoError } from 'mongodb';
import { ingredients } from '../common/types';
import { Ingredient } from '../models/ingredients.model';

export const getIngredients = (_: Request, res: Response): void => {
  Ingredient.find({}, (_: MongoError, ingredients: Array<ingredients>) => {
    res.send({ ingredients: ingredients[0].ingredients });
  });
};

export const getIngredientsByQuery = (req: Request, res: Response): void => {
  const query: string = _.startCase(req.params.query);
  Ingredient.find({}, (_: MongoError, ingredients: Array<ingredients>) => {
    const foundIngredients: Array<string> = ingredients[0].ingredients.filter(
      (ingredient: string) => {
        return ingredient.includes(query);
      }
    );
    res.send({ ingredients: foundIngredients });
  });
};
