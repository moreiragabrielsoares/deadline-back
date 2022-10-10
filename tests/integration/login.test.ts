import supertest from "supertest";
import app from "../../src/app";
import prisma from "../../src/database/database";
import { createNewUser, createNewUserLogin } from "../factories/userFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE sessions RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("POST /login", () => {
  it("given a valid login body with valid credentials it should return 200 and an object with the token", async () => {
    const newUser = await createNewUserLogin();

    const result = await supertest(app).post("/login").send(newUser);

    expect(result.status).toEqual(200);
    expect(result.body).toBeInstanceOf(Object);
  });

  it("given an invalid login body it should return 422", async () => {
    const invalidBody = {};

    const result = await supertest(app).post("/login").send(invalidBody);

    expect(result.status).toEqual(422);
  });

  it("given a valid login body with invalid credentials it should return 401", async () => {
    const validBodyWithInvalidCredentials = createNewUser();

    const result = await supertest(app)
      .post("/login")
      .send(validBodyWithInvalidCredentials);

    expect(result.status).toEqual(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
