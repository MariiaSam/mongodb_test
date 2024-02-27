import express from "express";
import { middlewares } from "../middleware/index.js";
import { schemas } from "../models/users.js";
import auth from '../controllers/auth.js'

const {
    register
  } = auth

const router = express.Router();

 
export default router;

//signup
router.post("/register", middlewares.validateBody(schemas.registerSchema), register);
      