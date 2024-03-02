import express from "express";

import bookRoutes from './books.js'

import authRouter from './auth.js'

import auth from "../middleware/auth.js";
const router = express.Router()

router.use('/books', auth, bookRoutes)  
router.use('/auth', authRouter)  

export default router  


