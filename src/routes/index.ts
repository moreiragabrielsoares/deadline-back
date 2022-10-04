import { Router } from "express";
import signUpRouter from "./signUpRouter";
import loginRouter from "./loginRouter";
import processRouter from "./processRouter";

const router = Router();

router.use(signUpRouter);
router.use(loginRouter);
router.use(processRouter);

export default router;
