import express from "express";
require("dotenv").config();

import usersRouter from "./routes/user.route";

const app = express();
app.use(express.json());

app.get("/users", usersRouter);

const port = Number(process.env.PORT);
app.listen(port, "tenant1.localhost", () => {
  console.log(`Server is running in port: ${port} :)`);
});
