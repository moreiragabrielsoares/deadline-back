import joi from "joi";
import { ILoginUserData } from "../types/loginTypes";

export const loginSchema = joi.object<ILoginUserData>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
