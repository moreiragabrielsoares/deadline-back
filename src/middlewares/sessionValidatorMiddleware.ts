import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as sessionRepository from "../repositories/sessionRepository";

dotenv.config();

export default async function validateSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    throw { type: "unauthorized", message: "Invalid header" };
  }

  const jwtKey = process.env.JWT_KEY || "";

  try {
    jwt.verify(token, jwtKey);
  } catch (error) {
    throw { type: "unauthorized", message: "Invalid header" };
  }

  const tokenDB = await sessionRepository.findToken(token);

  if (!tokenDB) {
    throw { type: "Unauthorized", message: "Invalid header" };
  }

  res.locals.session = { userId: tokenDB.userId };
  next();
}
