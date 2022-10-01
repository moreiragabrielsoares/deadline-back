import prisma from "../database/database";
import { ICreateNewUserData } from "../types/userTypes";

export async function insertNewUser(newUserData: ICreateNewUserData) {
  await prisma.users.create({
    data: newUserData,
  });
}

export async function findUserByEmail(email: string) {
  return prisma.users.findUnique({
    where: { email },
  });
}
