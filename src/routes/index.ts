import { Router } from "express";
import signUpRouter from "./signUpRouter";
import loginRouter from "./loginRouter";
<<<<<<< Updated upstream
=======
import processRouter from "./processRouter";
>>>>>>> Stashed changes

const router = Router();

router.use(signUpRouter);
router.use(loginRouter);
<<<<<<< Updated upstream
=======
router.use(processRouter);
>>>>>>> Stashed changes

export default router;
