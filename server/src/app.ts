require('dotenv').config();
import { connectToDb } from './config/database.config';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import ingredientsRouter from './routes/ingredients.router';
import recipesRouter from './routes/recipes.router';

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(ingredientsRouter);
app.use(recipesRouter);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
