import express from 'express';
import authenticateToken from '../middleware/authenticateToken';
import { createOrUpdateList } from '../controllers/list.controller';

const router = express.Router();

router.post('/lists', authenticateToken, createOrUpdateList);

export default router;
