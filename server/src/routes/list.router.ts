import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { createNewList } from '../controllers/list.controller';

const router = express.Router();

router.post('/lists', authenticateToken, createNewList);

export default router;
