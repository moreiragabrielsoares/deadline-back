import { Request, Response } from "express";
import * as userService from "../services/userService";
import { ICreateNewUserData } from "../types/userTypes";

export async function signUpNewUser(req: Request, res: Response) {
  const newUserData: ICreateNewUserData = req.body;

  await userService.signUpNewUser(newUserData);

  res.status(201).send("New register created");
}
