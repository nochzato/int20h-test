import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { createOrUpdateList, getLists } from '../controllers/list.controller';

const router = express.Router();

router.post('/lists', authenticateToken, createOrUpdateList);

router.get('/lists', authenticateToken, getLists);

export default router;
