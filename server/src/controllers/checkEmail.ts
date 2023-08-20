import { RequestHandler } from "express";
import { DataEntry } from "./types";
import readDatabase from "../lib/readDatabase";

const checkEmail: RequestHandler = async function (req, res){
  try {
    const body = req.body as DataEntry;
    const db = readDatabase(); 

    const checkDb = db.data.find(item => item.email === body.email);

    if (checkDb) {
      res.status(200).json(checkDb);
    } else {
      res.status(404).json({ message: 'Data not found in the database' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default checkEmail;

