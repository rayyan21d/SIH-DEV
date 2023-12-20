import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { loginUser } from "../controllers/auth.controller.js";

const router = Router();

router.route("/", ).post(loginUser);



export default router;