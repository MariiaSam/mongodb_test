import express from "express";

import bookRoutes from './books.js'

import authRouter from './auth'

const router = express.Router()

router.use('/books', bookRoutes)  
router.use('/auth', authRouter)  

export default router  


