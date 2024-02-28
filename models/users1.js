// import { Schema, model } from "mongoose";
// import Joi from "joi";

// import { middlewares } from "../middleware/index.js";

// const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//   },
//   email: {
//       type: String,
//       match: emailRegexp,
//       unique: true,
//       required: true,
//   },
//   password: {
//       type: String,
//       minlength: 6,
//       required: true,
//   }
// }, 

// {versionKey: false, timestamps: true});


// userSchema.post("save", middlewares.mongooseError);

// const registerSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().pattern(emailRegexp).required(),
//   password: Joi.string().min(6).required(),
// })

// const loginSchema = Joi.object({
//   email: Joi.string().pattern(emailRegexp).required(),
//   password: Joi.string().min(6).required(),
// })

// export const schemas = {
//     registerSchema,
//     loginSchema
// }

// export const User = model("user", userSchema);
