import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import * as loginSchema from "../schemas/loginSchema";
import * as loginController from "../controllers/loginController";

const loginRouter = Router();

loginRouter.post(
  "/login",
  validateSchema(loginSchema.loginSchema),
  loginController.loginUser
);

export default loginRouter;
