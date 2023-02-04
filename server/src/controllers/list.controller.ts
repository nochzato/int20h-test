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
