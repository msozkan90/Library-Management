import express from "express";
import "reflect-metadata";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import userRoutes from "./routes/userRoutes";
import dataSource from "./data-source";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

dataSource
  .initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

export default app;
