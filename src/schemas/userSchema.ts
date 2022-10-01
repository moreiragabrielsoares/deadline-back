import joi from "joi";
import { ICreateNewUserData } from "../types/userTypes";

// Password Regex: Minimum 8 characters, at least 1 letter, 1 number and 1 special character(@$!%*#?&)
export const signUpNewUserSchema = joi.object<ICreateNewUserData>({
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .required(),
});
