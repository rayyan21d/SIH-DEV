import { Router } from "express";
import { addTrain } from "../controllers/station.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { correctStation } from "../middlewares/station.middleware.js";

const router = Router();

router.post("/:id/add-train", verifyToken, correctStation, addTrain);



export default router;