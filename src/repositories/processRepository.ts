import prisma from "../database/database";
import { ICreateNewProcess } from "../types/processTypes";

export async function insertNewProcess(newProcessData: ICreateNewProcess) {
  await prisma.processes.create({
    data: newProcessData,
  });
}
