import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import { IUser, JwtPayload } from '../common/types';
import { MongooseError } from 'mongoose';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies['auth-token'];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: any, payload: any) => {
      if (err) return res.sendStatus(403);

      const user = payload as unknown as JwtPayload;

      User.findOne(
        { email: user.email.trim() },
        (_: MongooseError, foundUser: IUser) => {
          req.body.user = foundUser;
          next();
        }
      );
    }
  );
};

export default authenticateToken;
