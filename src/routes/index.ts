import { Router } from "express";
import signUpRouter from "./signUpRouter";
import loginRouter from "./loginRouter";

const router = Router();

router.use(signUpRouter);
router.use(loginRouter);

export default router;
