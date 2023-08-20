import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import checkRouter from './routes/checkRouter'

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true, 
}));

app.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 5000);
  });
  next();
});

app.use('/check', checkRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});