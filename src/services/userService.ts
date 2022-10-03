import bcrypt from "bcrypt";
import { ICreateNewUserData } from "../types/userTypes";
import * as userRepository from "../repositories/userRepository";

export async function getUserByEmail(userEmail: string) {
  const user = userRepository.findUserByEmail(userEmail);

  return user;
}

export async function signUpNewUser(newUserData: ICreateNewUserData) {
  const user = await getUserByEmail(newUserData.email);
  if (user) {
    throw { type: "conflict", message: "This email is already registered" };
  }
  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(newUserData.password, SALT);

  const createNewUserData: ICreateNewUserData = {
    email: newUserData.email,
    password: encryptedPassword,
  };

  await userRepository.insertNewUser(createNewUserData);

  return;
}
