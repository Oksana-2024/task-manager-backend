import { TodosCollection } from "../db/models/todo.mjs";
import { ITodo } from "../types/todoTypes.mjs";

export const createTodo = async (payload: ITodo) => {
  const todoData = {
    ...payload,
  };

  const newTodo = await TodosCollection.create(todoData);
  return newTodo;
};

export const updateTodo = async (id: string, data: Partial<ITodo>) => {
  const updatedTodo = await TodosCollection.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!updatedTodo) {
    throw new Error("Todo not found");
  }

  return updatedTodo;
};

export const getTodos = async (
  { isCompleted }: { isCompleted: ITodo["isCompleted"] } = {} as never
) => {
  return TodosCollection.find(
    typeof isCompleted === "boolean" ? { isCompleted } : {}
  );
};

export const deleteTodo = async (id: string) => {
  const deleted = await TodosCollection.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Todo not found");
  }
  return;
};
