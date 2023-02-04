import express from 'express';
import {
  getIngredients,
  getIngredientsByQuery,
} from '../controllers/ingredients.controller';

const router = express.Router();

router.get('/ingredients/:query', getIngredientsByQuery);

router.get('/ingredients', getIngredients);

export default router;
