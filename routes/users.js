import { Router } from "express";
import register from "../controllers/users/register.js";
import userRegister from "../schemas/user/register.js";
import validator from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const user_router = Router();

user_router.post('/register', validator(userRegister), accountExists, createHash, register);

export default user_router;