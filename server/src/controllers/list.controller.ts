import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { IList } from '../common/types';
import { List } from '../models/list.model';

export const createNewList = (req: Request, res: Response) => {
  const newList = new List({
    title: req.body.title,
    recipes: [req.body.recipeId],
    uid: req.body.user._id,
  });

  newList.save().then((savedList) => {
    res.send(savedList);
  });
};

export const addRecipeToList = async (req: Request, res: Response) => {
  const list = await List.findById(req.params.id);

  if (list) {
    if (list.uid.toString() !== req.body.user._id.toString()) {
      res.sendStatus(401);
    } else {
      const recipes = list.recipes;
      recipes.push(req.body.recipeId);

      const doc = await List.findByIdAndUpdate(
        req.params.id,
        { recipes },
        { new: true }
      );

      res.send(doc);
    }
  }
};
