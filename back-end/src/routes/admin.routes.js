import { Router } from "express";
import { registerStation } from "../controllers/station.controller.js";
import { registerSiding } from "../controllers/siding.controller.js";
const router = Router();

// router.route("/sidings/register").post(registerSiding);
router.route("/stations/register").post(registerStation);
router.route("/sidings/register").post(registerSiding);
export default router;