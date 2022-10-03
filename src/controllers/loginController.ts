import { Request, Response } from "express";
import * as loginService from "../services/loginService";
import { ILoginUserData } from "../types/loginTypes";

export async function loginUser(req: Request, res: Response) {
  const userData: ILoginUserData = req.body;

  const token = await loginService.loginUser(userData);

  res.status(200).send({ token });
}
