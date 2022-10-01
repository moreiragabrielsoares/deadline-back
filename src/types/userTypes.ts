import { Users } from "@prisma/client";

export type ICreateNewUserData = Omit<Users, "id" | "createdAt">;
