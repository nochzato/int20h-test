require('dotenv').config();
import mongoose from 'mongoose';

export const connectToDb = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(
    `mongodb+srv://nochzato:${process.env.MONGO_PASSWORD}@cluster0.vy748.mongodb.net/myRecipeBook?retryWrites=true&w=majority`,
    () => {
      console.log('Connected to MongoDB');
    }
  );
};
