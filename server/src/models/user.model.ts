import mongoose from 'mongoose';
import { IUser } from '../common/types';

const userSchema = new mongoose.Schema<IUser>({
  email: String,
  name: String,
  password: String,
});

export const User = mongoose.model<IUser>('User', userSchema);
