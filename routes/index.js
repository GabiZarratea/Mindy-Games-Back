import express from 'express'
import user_router from './users.js';
import gamer_router from './gamers.js';
import tournaments_router from './tournaments.js';
import mercadopago_router from './mercadopago.js';

const router = express.Router();

router.use('/user', user_router)
router.use('/gamer', gamer_router)
router.use('/tournaments', tournaments_router)
router.use('/mercadopago', mercadopago_router)


export default router
