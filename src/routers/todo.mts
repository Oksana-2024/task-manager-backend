import { Router } from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodosController,
  updateTodoController,
} from "../controllers/todoController.mjs";
import { validateBody } from "../middlewares/validateBody.mjs";
import { ctrlWrapper } from "../utils/ctrlWrapper.mjs";
import { todoSchema } from "../validation/todo.mjs";
import { isValidId } from "../middlewares/isValidId.mjs";

export const todoRouter = Router();

todoRouter.post(
  "/",
  validateBody(todoSchema),
  ctrlWrapper(createTodoController)
);
todoRouter.get("/", ctrlWrapper(getTodosController));
todoRouter.patch(
  "/:id",
  isValidId,
  validateBody(todoSchema),
  ctrlWrapper(updateTodoController)
);
todoRouter.delete("/:id", isValidId, ctrlWrapper(deleteTodoController));
