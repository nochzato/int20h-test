import { Request, Response } from 'express';
import axios from 'axios';
import { IngredientWithMeasure } from '../common/types';
import _ from 'lodash';

export const getRecipesByMainIngredient = (
  req: Request,
  res: Response
): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${req.body.main_ingredient}`
    )
    .then(async (response) => {
      const recipes = response.data.meals;
      const sortedRecipes: any[] = [];
      for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        let mealIngredients: Array<string> = [];
        await axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
          )
          .then((response) => {
            const meal = response.data.meals[0];
            for (let i = 1; i <= 20; i++) {
              if (meal[`strIngredient${i}`]) {
                mealIngredients.push(_.startCase(meal[`strIngredient${i}`]));
              } else {
                break;
              }
            }
            const missingIngredients = mealIngredients.filter(
              (ingredient) => !req.body.ingredients.includes(ingredient)
            );

            sortedRecipes.push({ ...recipe, missingIngredients });
          });
      }
      const compareFn = (a: any, b: any) => {
        if (a.missingIngredients.length < b.missingIngredients.length) {
          return -1;
        }
        if (a.missingIngredients.length > b.missingIngredients.length) {
          return 1;
        }

        return 0;
      };
      sortedRecipes.sort(compareFn);
      res.send(sortedRecipes.slice(0, 8));
    });
};

export const getRecipeById = (req: Request, res: Response): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.id}`
    )
    .then((response) => {
      const meal = response.data.meals[0];
      const ingredientsWithMeasures: Array<IngredientWithMeasure> = [];
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
};
