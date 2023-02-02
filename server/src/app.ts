require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import axios from 'axios';
import _ from 'lodash';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

interface ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: null;
}

const ingredients: Array<string> = [];

app.get('/ingredients/:query', (req: Request, res: Response): void => {
  const query: string = _.startCase(req.params.query);
  const foundIngredients: Array<string> = ingredients.filter(
    (ingredient: string) => {
      return ingredient.includes(query);
    }
  );
  res.send(foundIngredients);
});

app.get('/recipes', (req: Request, res: Response): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${req.body.main_ingredient}`
    )
    .then((response) => {
      res.send(response.data.meals);
    });
});

app.get('/recipes/:id', (req: Request, res: Response): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.id}`
    )
    .then((response) => {
      res.send(response.data.meals[0]);
    });
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port ' + process.env.PORT);
  axios
    .get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => {
      response.data.meals.forEach((ingredient: ingredient) => {
        ingredients.push(ingredient.strIngredient);
      });
    });
});
