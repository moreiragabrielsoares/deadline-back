import { Request, Response } from "express";
import * as processService from "../services/processService";
import { INewProcess } from "../types/processTypes";

export async function createNewProcessDeadline(req: Request, res: Response) {
  const userId = res.locals.session.userId;
  const newUserData: INewProcess = req.body;

  await processService.createNewProcessDeadline(newUserData, userId);

  res.status(201).send("New register created");
}

export async function getProcessesOrderByDeadline(req: Request, res: Response) {
  const userId = res.locals.session.userId;

  const processes = await processService.getProcessesOrderByDeadline(userId);

  res.status(200).send(processes);
}
