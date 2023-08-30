import { Router } from "express";
import read from "../controllers/tournaments/read.js"

const tournaments_router = Router();

tournaments_router.get('/', read)

export default tournaments_router;