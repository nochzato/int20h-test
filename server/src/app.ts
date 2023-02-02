require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import axios from 'axios';
import _ from 'lodash';
import { StringifyOptions } from 'querystring';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

interface ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

interface ingredientWithMeasure {
  ingredient: string;
  measure: string;
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
      const meal = response.data.meals[0];
      const ingredientsWithMeasures: Array<ingredientWithMeasure> = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsWithMeasures.push({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`],
          });
        } else {
          break;
        }
      }

      res.send({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strCategory: meal.strCategory,
        strArea: meal.strArea,
        strInstructions: meal.strInstructions,
        strMealThumb: meal.strMealThumb,
        strTags: meal.strTags,
        strYoutube: meal.strYoutube,
        ingredientsWithMeasures,
      });
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
