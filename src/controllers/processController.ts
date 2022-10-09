import { Request, Response } from "express";
import * as processService from "../services/processService";
import { INewProcess, IProcessId } from "../types/processTypes";

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

export async function updateProcessSolvedStatus(req: Request, res: Response) {
  const userId = res.locals.session.userId;
  const { id: processId }: IProcessId = req.body;

  await processService.updateProcessSolvedStatus(userId, processId);

  res.status(200).send("Process status updated");
}

export async function deleteProcess(req: Request, res: Response) {
  const userId = res.locals.session.userId;
  const { id: processId }: IProcessId = req.body;

  await processService.deleteProcess(userId, processId);

  res.status(200).send("Process deleted");
}
