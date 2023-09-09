import { Router } from "express";
import gamerRegister from "../schemas/gamerRegister.js";
import register from "../controllers/gamers/register.js";
import validator from "../middlewares/validator.js";

const gamer_router = Router();

gamer_router.post('/register', validator(gamerRegister), register)

export default gamer_router;