import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

// Routes import
import emailRouter from "./routes/emailRoutes.js";

// middleware import
import ErrorHandleMiddleware from "./middleware/error-handler.js";
import NotFoundMiddleware from "./middleware/not-found.js";

// Invoke Morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

// API routes
app.use("/api/v1/email", emailRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(NotFoundMiddleware);
app.use(ErrorHandleMiddleware);

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
