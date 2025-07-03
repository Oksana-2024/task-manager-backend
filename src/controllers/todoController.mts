import { Request, Response, NextFunction } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todo.mjs";
import createHttpError from "http-errors";
import { parseBoolean } from "../utils/parseBoolean.mjs";

export const createTodoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json({
      status: 201,
      message: "Successfully created todo!",
      todo,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTodoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const result = await updateTodo(id, payload);
    if (!result) {
      throw createHttpError(404, "Todo not found!");
    }

    res.status(200).json({
      status: 200,
      message: "Successfully patched a todo!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTodoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await deleteTodo(id);

    res.status(200).json({ message: "Todo successfully deleted" });
  } catch (error) {
    next(error);
  }
};

export const getTodosController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isCompleted } = req.query;
    const todo = await getTodos({ isCompleted: parseBoolean(isCompleted as string) });
    res.status(201).json({
      status: 201,
      message: "Successfully get todos!",
      todo,
    });
  } catch (error) {
    next(error);
  }
};
