import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
