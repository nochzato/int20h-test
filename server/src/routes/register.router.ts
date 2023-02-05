import express from 'express';
import { Register } from '../controllers/register.controller';

const router = express.Router();

router.post('/register', Register);

export default router;
