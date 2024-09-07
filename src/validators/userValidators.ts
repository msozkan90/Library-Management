import Joi from "joi";

export const createUpdateUserSchema = Joi.object({
  name: Joi.string().min(4).max(50).required().messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
    "any.required": "Name is a required field",
  }),
});

export const patchUserSchema = Joi.object({
  name: Joi.string().min(4).max(50).messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
  }),
});
