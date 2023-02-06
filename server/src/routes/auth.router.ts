import express from 'express';
import {
  AuthenticateUser,
  checkAuthentication,
} from '../controllers/auth.controller';
import authenticateToken from '../middleware/authenticateToken';

const router = express.Router();

router.post('/auth', AuthenticateUser);

router.get('/check-auth', authenticateToken, checkAuthentication);

export default router;
