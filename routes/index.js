import express from 'express'
import user_router from './users.js';
import tournaments_router from './tournaments.js';

const router = express.Router();

router.use('/user', user_router)
router.use('/tournaments', tournaments_router)

export default router
