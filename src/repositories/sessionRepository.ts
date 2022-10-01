import prisma from "../database/database";
import { ICreateNewSession } from "../types/sessionTypes";

export async function insertNewSession(newSessionData: ICreateNewSession) {
  await prisma.sessions.create({
    data: newSessionData,
  });
}

export async function findToken(token: string) {
  return prisma.sessions.findUnique({
    where: { token },
  });
}
