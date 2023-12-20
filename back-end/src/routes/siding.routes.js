import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { correctSiding } from "../middlewares/siding.middleware.js";
import { makeRequest, updateRequest } from "../controllers/siding.controller.js";

const router = Router();


// router.get("/:id/")
router.post("/:sidingCode/make-request", verifyToken, correctSiding, makeRequest);
router.patch("/:sidingCode/:requestID", verifyToken, correctSiding, updateRequest)

export default router;