import { Router } from "express";
import * as mainControllers from "../controllers/main.js";
import authenticate from "../middleware/auth.js";

const router = Router();

router.get("/dashboard", authenticate, mainControllers.dashboard)
router.post("/login", mainControllers.login)

export default router;