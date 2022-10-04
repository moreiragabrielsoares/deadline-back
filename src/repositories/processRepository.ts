import prisma from "../database/database";
import { ICreateNewProcess } from "../types/processTypes";

export async function insertNewProcess(newProcessData: ICreateNewProcess) {
  await prisma.processes.create({
    data: newProcessData,
  });
}

export async function getProcessByUserIdProcessNumberTask(
  userId: number,
  processNumber: string,
  task: string | null
) {
  const process = await prisma.processes.findFirst({
    where: {
      userId,
      processNumber,
      task,
    },
  });

  return process;
}
