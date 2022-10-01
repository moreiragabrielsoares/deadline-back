import { Router } from "express";
import signUpRouter from "./signUpRouter";

const router = Router();

router.use(signUpRouter);

export default router;
