import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/user.model';

const saltRounds = 10;

export const Register = async (req: Request, res: Response) => {
  const emailIsUsed = await User.findOne({ email: req.body.email });

  if (emailIsUsed) {
    res.sendStatus(400).end();
  } else {
    await bcrypt.hash(req.body.password, saltRounds, (_, password) => {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password,
      });
      newUser.save().then((user) => {
        res.send(user);
      });
    });
  }
};
