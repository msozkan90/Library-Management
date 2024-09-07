import Joi from "joi";

export const createUpdateBorrowSchema = Joi.object({
  user: Joi.number().required().messages({
    "number.base": "User should be a type of number",
    "number.empty": "User cannot be an empty field",
    "any.required": "User is a required field",
  }),
  book: Joi.number().required().messages({
    "number.base": "Book should be a type of number",
    "number.empty": "Book cannot be an empty field",
    "any.required": "Book is a required field",
  }),
});

export const patchBorrowSchema = Joi.object({
  user: Joi.number().messages({
    "number.base": "User should be a type of number",
    "number.empty": "User cannot be an empty field",
  }),
  book: Joi.number().messages({
    "number.base": "Book should be a type of number",
    "number.empty": "Book cannot be an empty field",
  }),
  score: Joi.number().messages({
    "number.base": "Score should be a type of number",
    "number.empty": "Score cannot be an empty field",
  }),
});
