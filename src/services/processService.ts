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

export async function updateProcessSolvedStatus(
  userId: number,
  processId: number
) {
  const process = await processRepository.getProcessById(processId);

  if (!process) {
    throw { type: "not_found", message: "Process not found" };
  }

  if (process.userId !== userId) {
    throw { type: "unauthorized", message: "User and process do not match" };
  }

  await processRepository.updateProcessSolvedStatus(
    processId,
    process.isSolved
  );

  return;
}

export async function deleteProcess(userId: number, processId: number) {
  const process = await processRepository.getProcessById(processId);

  if (!process) {
    throw { type: "not_found", message: "Process not found" };
  }

  if (process.userId !== userId) {
    throw { type: "unauthorized", message: "User and process do not match" };
  }

  await processRepository.deleteProcessById(processId);

  return;
}
