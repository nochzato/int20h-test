import express from 'express';
import { AuthenticateUser } from '../controllers/auth.controller';

const router = express.Router();

router.post('/auth', AuthenticateUser);

export default router;
