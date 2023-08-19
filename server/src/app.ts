import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from "fs";
import cors from 'cors';
import { DataEntry, Database } from './types';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const DATA_BASE = 'db.json';
const PATH_DB = path.resolve('db', DATA_BASE);

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

function readDatabase(): Database {
  const dbContent = fs.readFileSync(PATH_DB, 'utf-8');
  return JSON.parse(dbContent); 
}

app.post('/check', (req: Request, res: Response) => {
  const body = req.body as DataEntry;
  const db = readDatabase();
  
  const checkDb = db.data.find(item => item.email === body.email);

  if (checkDb) {
    res.status(200).json( checkDb );
  } else {
    res.status(404).json({ message: 'Data not found in the database' });
  }
});


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});