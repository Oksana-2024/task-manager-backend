import express from "express";
import cors from "cors";
import { notFoundHandler } from "./middlewares/notFoundHandler.mjs";
import { errorHandler } from "./middlewares/errorHandler.mjs";
import { getEnvVar } from "./utils/getEnvVar.mjs";
import { todoRouter } from "./routers/todo.mjs";

const PORT = Number(getEnvVar("PORT", "3000"));

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/todo", todoRouter);
  app.all(/.*/, notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
