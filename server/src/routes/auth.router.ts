import express from 'express';
import {
  authenticateUser,
  checkAuthentication,
  logout,
} from '../controllers/auth.controller';
import authenticateToken from '../middleware/authenticateToken';

const router = express.Router();

router.post('/auth', authenticateUser);

router.get('/check-auth', authenticateToken, checkAuthentication);

router.get('/logout', logout);

export default router;
