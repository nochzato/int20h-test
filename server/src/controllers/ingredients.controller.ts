import { Request, Response } from 'express';
import _ from 'lodash';
import { Ingredient } from '../models/ingredients.model';

export const getIngredients = (req: Request, res: Response): void => {
  Ingredient.find({}, (_: any, ingredients: any) => {
    res.send({ ingredients: ingredients[0].ingredients });
  });
};

export const getIngredientsByQuery = (req: Request, res: Response): void => {
  const query: string = _.startCase(req.params.query);
  Ingredient.find({}, (_: any, ingredients: any) => {
    const foundIngredients: Array<string> = ingredients[0].ingredients.filter(
      (ingredient: string) => {
        return ingredient.includes(query);
      }
    );
    res.send({ ingredients: foundIngredients });
  });
};
