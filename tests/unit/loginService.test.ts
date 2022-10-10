/* eslint-disable @typescript-eslint/no-explicit-any */
import { jest } from "@jest/globals";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createNewUserLogin } from "../factories/userFactory";
import * as loginService from "../../src/services/loginService";
import * as sessionRepository from "../../src/repositories/sessionRepository";
import * as userRepository from "../../src/repositories/userRepository";

beforeEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

describe("loginUser", () => {
  it("it should insert a new session and return one token", async () => {
    const newUser = await createNewUserLogin();

    jest
      .spyOn(userRepository, "findUserByEmail")
      .mockImplementationOnce((): any => newUser);

    jest.spyOn(bcrypt, "compareSync").mockImplementationOnce((): any => true);

    jest.spyOn(jwt, "sign").mockImplementationOnce((): any => "token");

    jest
      .spyOn(sessionRepository, "insertNewSession")
      .mockImplementationOnce((): any => "");

    await loginService.loginUser(newUser);

    expect(userRepository.findUserByEmail).toBeCalled();
    expect(bcrypt.compareSync).toBeCalled();
  });
});
