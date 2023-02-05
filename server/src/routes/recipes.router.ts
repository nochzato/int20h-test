import express from 'express';
import {
  getRecipesByMainIngredient,
  getRecipeById,
} from '../controllers/recipes.controller';

const router = express.Router();

router.post('/recipes', getRecipesByMainIngredient);

router.get('/recipes/:id', getRecipeById);

export default router;
