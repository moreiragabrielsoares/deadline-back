import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import validateSession from "../middlewares/sessionValidatorMiddleware";
import * as processSchema from "../schemas/processSchema";
import * as processController from "../controllers/processController";

const processRouter = Router();

processRouter.post(
  "/processes",
  validateSession,
  validateSchema(processSchema.processSchema),
  processController.createNewProcessDeadline
);

processRouter.get(
  "/processes",
  validateSession,
  processController.getProcessesOrderByDeadline
);

export default processRouter;
