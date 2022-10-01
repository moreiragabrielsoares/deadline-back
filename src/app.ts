import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import router from "./routes";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;
