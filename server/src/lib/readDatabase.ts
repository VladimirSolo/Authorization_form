import { Database } from "./types";
import path from 'path';
import fs from "fs";

const DATA_BASE = 'db.json';
const PATH_DB = path.resolve('db', DATA_BASE);

function readDatabase(): Database {
  const dbContent = fs.readFileSync(PATH_DB, 'utf-8');
  return JSON.parse(dbContent); 
}

export default readDatabase;