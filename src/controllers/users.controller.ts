import { User } from "../models/users.model";
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

export async function addUserController(req: Request, res: Response) {
  // Validatoin
  const { name, age, country, username } = req.body;

  if (!name || !age || !country || !username) {
    return res.status(500).send("Server Error");
  }

  const userExist = await User.findOne({ username: username });
  if (userExist) {
    return res.status(500).send("User already exist");
  }

  try {
    const newUser = new User({
      name: name,
      age: age,
      country: country,
      username: username,
    });

    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
}

export async function getUsersController(req: Request, res: Response) {
  try {
    const users = await User.find();
    return res.status(201).json(users);
  } catch (err) {
    console.log(err);
  }
}
