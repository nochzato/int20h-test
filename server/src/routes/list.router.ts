import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { addRecipeToList, createNewList } from '../controllers/list.controller';

const router = express.Router();

router.post('/lists', authenticateToken, createNewList);

router.patch('/lists/:id', authenticateToken, addRecipeToList);

export default router;
