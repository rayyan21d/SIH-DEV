import { Router } from "express";
import { loginUser } from "../controllers/auth.controller.js";

const router = Router();

router.route("/", ).post(verifyToken, loginUser);


export default router;