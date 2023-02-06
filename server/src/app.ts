require('dotenv').config();
import { connectToDb } from './config/database.config';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ingredientsRouter from './routes/ingredients.router';
import recipesRouter from './routes/recipes.router';
import registerRouter from './routes/register.router';
import authRouter from './routes/auth.router';
import listRouter from './routes/list.router';

const app: Application = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(ingredientsRouter);
app.use(recipesRouter);
app.use(registerRouter);
app.use(authRouter);
app.use(listRouter);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
