import axios from 'axios';
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
    const recipeTitle = await axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.body.recipeId}`
      )
      .then((response) => {
        return response.data.meals[0].strMeal;
      });
    recipes.push({ id: req.body.recipeId, title: recipeTitle });
    const updatedList = await List.findByIdAndUpdate(
      list._id,
      { recipes },
      { new: true }
    );
    res.send(updatedList);
  } else {
    const recipeTitle = await axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.body.recipeId}`
      )
      .then((response) => {
        return response.data.meals[0].strMeal;
      });
    const newList = new List({
      title: req.body.title,
      recipes: [{ id: req.body.recipeId, title: recipeTitle }],
      uid: req.body.user._id,
    });
    newList.save().then((savedList) => {
      res.send(savedList);
    });
  }
};

export const getLists = async (req: Request, res: Response) => {
  const lists = await List.find({ uid: req.body.user._id });
  res.send(lists);
};
