import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/user.model';

const saltRounds = 10;

export const Register = (req: Request, res: Response) => {
  bcrypt.hash(req.body.password, saltRounds, (_, password) => {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password,
    });
    newUser.save().then((user) => {
      res.send(user);
    });
  });
};
