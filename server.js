import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// Security import
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// Routes import
import emailRouter from "./routes/emailRoutes.js";

// middleware import
import ErrorHandleMiddleware from "./middleware/error-handler.js";
import NotFoundMiddleware from "./middleware/not-found.js";

// Invoke Morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// API routes
app.use("/api/v1/email", emailRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

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
