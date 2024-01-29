import express from "express";

import {
  addUserController,
  getUsersController,
} from "../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.post("/", addUserController);
usersRouter.get("/", getUsersController);

export default usersRouter;
