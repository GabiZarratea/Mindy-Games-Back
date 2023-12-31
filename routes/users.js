import { Router } from "express";
import register from "../controllers/users/register.js";
import userRegister from "../schemas/user/register.js";
import validator from "../middlewares/validator.js";
import accountExists from '../middlewares/accountExists.js'
import createHash from '../middlewares/createHash.js'
import read from "../controllers/users/read.js";
import userLogin from "../schemas/user/userSigninSchema.js";
import accountNotExist from '../middlewares/accountNotExist.js';
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';
import login from "../controllers/users/login.js";
import signout from '../controllers/users/signout.js';
import passport from '../middlewares/passport.js';
import signintoken from "../controllers/users/signintoken.js";

const user_router = Router();

user_router.get('/', read)
user_router.post('/register', validator(userRegister), accountExists, createHash, register)
user_router.post('/login', validator(userLogin), accountNotExist, passwordIsOk, generateToken, login)
user_router.post('/signout', passport.authenticate('jwt', { session:false }), signout)
user_router.get('/signintoken', passport.authenticate('jwt', { session:false }), signintoken)

export default user_router;