import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ILoginUserData } from "../types/loginTypes";
import { ICreateNewSession } from "../types/sessionTypes";
import * as sessionRepository from "../repositories/sessionRepository";
import * as userRepository from "../repositories/userRepository";

dotenv.config();

function generateToken(userId: number) {
  const TIME_ONE_DAY_SEC = 60 * 60 * 24;

  const jwtData = { userId };
  const jwtKey: string = process.env.JWT_KEY || "";
  const jwtConfig = { expiresIn: TIME_ONE_DAY_SEC };
  const token = jwt.sign(jwtData, jwtKey, jwtConfig);

  return token;
}

export async function loginUser(userData: ILoginUserData) {
  const userDB = await userRepository.findUserByEmail(userData.email);
  if (!userDB) {
    throw { type: "unauthorized", message: "Invalid credentials" };
  }

  if (!bcrypt.compareSync(userData.password, userDB.password)) {
    throw { type: "unauthorized", message: "Invalid credentials" };
  }

  const token = generateToken(userDB.id);
  const newSessionData: ICreateNewSession = { userId: userDB.id, token };

  await sessionRepository.insertNewSession(newSessionData);

  return token;
}
