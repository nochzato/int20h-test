import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { List } from '../models/list.model';

export const createOrUpdateList = async (req: Request, res: Response) => {
  const list = await List.findOne({
    uid: req.body.user._id,
    title: req.body.title,
  });

  if (list) {
    const recipes = list.recipes;
    recipes.push(req.body.recipeId);
    const updatedList = await List.findByIdAndUpdate(
      list._id,
      { recipes },
      { new: true }
    );
    res.send(updatedList);
  } else {
    const newList = new List({
      title: req.body.title,
      recipes: [req.body.recipeId],
      uid: req.body.user._id,
    });
    newList.save().then((savedList) => {
      res.send(savedList);
    });
  }
};
