import { ICreateNewUserData } from "../types/userTypes";
import * as userRepository from "../repositories/userRepository";

export async function getUserByEmail(userEmail: string) {
  const user = userRepository.findUserByEmail(userEmail);

  return user;
}

export async function signUpNewUser(newUserData: ICreateNewUserData) {
  return;
}
