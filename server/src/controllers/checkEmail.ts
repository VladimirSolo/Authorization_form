import { RequestHandler } from "express";
import { DataEntry } from "./types";
import readDatabase from "../lib/readDatabase";
import { chownSync } from "fs";

const checkEmail: RequestHandler = async function (req, res){
  try {
    const {email, number} = req.body as DataEntry;
    const db = readDatabase();

    let checkDb;

    if (!number) {
      checkDb = db.data.find(item => item.email === email);
    } else {
      checkDb = db.data.find(item => item.email === email && item.number === number);
    }

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

