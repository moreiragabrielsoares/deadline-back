import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import * as userSchema from "../schemas/userSchema";
import * as userController from "../controllers/userController";

const signUpRouter = Router();

signUpRouter.post(
  "/signup",
  validateSchema(userSchema.signUpNewUserSchema),
  userController.signUpNewUser
);

export default signUpRouter;
