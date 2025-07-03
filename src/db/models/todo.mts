import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TodosCollection = model("todo", todoSchema);
