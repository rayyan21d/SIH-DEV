import { Router } from "express";
import { registerAdmin, registerSiding, registerStation } from "../controllers/admin.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/admin.middleware.js";
const router = Router();

// router.route("/sidings/register").post(registerSiding);
router.route("/register-station").post(verifyToken, isAdmin, registerStation);
router.route("/register-siding").post(verifyToken, isAdmin, registerSiding);
router.route("/register-admin").post(registerAdmin);
export default router;