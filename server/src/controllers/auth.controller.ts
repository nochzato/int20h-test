import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';
import { IUser } from '../common/types';
import { User } from '../models/user.model';
import generateAcessToken from '../utils/generateAccessToken';

export const AuthenticateUser = (req: Request, res: Response) => {
  const user: IUser = req.body;
  User.findOne({ email: user.email }, (_: MongooseError, foundUser: IUser) => {
    if (foundUser) {
      bcrypt.compare(user.password, foundUser.password, (err, same) => {
        if (same) {
          res.send(generateAcessToken(user.email));
        } else {
          res.sendStatus(401).send("Password doesn't match");
        }
      });
    } else {
      res.sendStatus(401).send('User with this email not found');
    }
  });
};
