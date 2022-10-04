import { INewProcess } from "../types/processTypes";
import * as processRepository from "../repositories/processRepository";

export async function createNewProcessDeadline(
  newProcessData: INewProcess,
  userId: number
) {
  const process = await processRepository.getProcessByUserIdProcessNumberTask(
    userId,
    newProcessData.processNumber,
    newProcessData.task
  );

  if (process) {
    throw { type: "conflict", message: "Process task already registered" };
  }

  const createNewProcessData = { ...newProcessData, userId };
  createNewProcessData.deadline = new Date(createNewProcessData.deadline);

  await processRepository.insertNewProcess(createNewProcessData);
}

export async function getProcessesOrderByDeadline(userId: number) {
  const processes = await processRepository.getProcessesOrderByDeadline(userId);

  return processes;
}
