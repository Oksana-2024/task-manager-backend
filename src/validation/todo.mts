import Joi from "joi";

export const todoSchema = Joi.object({
  title: Joi.string().trim().max(20).required().messages({
    "string.max": "Title should have at most 20 characters",
    "string.empty": "Title is required",
  }),
  description: Joi.string().trim().max(250).messages({
    "string.max": "Description should have at most 250 characters",
    "string.empty": "Description is required",
  }),
  isCompleted: Joi.boolean().default(false),
});
