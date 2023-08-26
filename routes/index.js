import express from 'express'
import user_router from './users.js';

const router = express.Router();

router.use('/user', user_router)

export default router
