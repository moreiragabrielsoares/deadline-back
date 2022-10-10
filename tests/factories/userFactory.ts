import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import prisma from "../../src/database/database";

export function createNewUser() {
  const newUser = {
    email: faker.internet.email(),
    password: "#a123456",
  };

  return newUser;
}

export async function createNewUserLogin() {
  const newUser = createNewUser();

  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(newUser.password, SALT);

  await prisma.users.create({
    data: { email: newUser.email, password: encryptedPassword },
  });

  return newUser;
}
