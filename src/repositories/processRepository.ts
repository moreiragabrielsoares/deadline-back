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

export async function getProcessesOrderByDeadline(userId: number) {
  const processes = await prisma.$queryRawUnsafe(
    `
    SELECT p."id",
      p."processNumber",
      p."task",
      p."deadline",
      p."isSolved",
      pl."priorityLevel"
    FROM "processes" p
    JOIN "priorityLevels" pl ON p."priorityId" = pl."id"
    WHERE p."userId" = $1 AND p."isSolved" = false
    ORDER BY p."deadline" ASC, pl."priorityLevel" ASC
    `,
    userId
  );

  return processes;
}

export async function getProcessById(processId: number) {
  const process = await prisma.processes.findUnique({
    where: {
      id: processId,
    },
  });

  return process;
}

export async function updateProcessSolvedStatus(
  processId: number,
  isSolved: boolean
) {
  await prisma.processes.update({
    where: {
      id: processId,
    },
    data: {
      isSolved: !isSolved,
    },
  });
}
