import { Users } from "@prisma/client";

export type ILoginUserData = Omit<Users, "id" | "createdAt">;
