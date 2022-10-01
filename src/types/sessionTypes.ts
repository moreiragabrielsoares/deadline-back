import { Sessions } from "@prisma/client";

export type ICreateNewSession = Omit<Sessions, "id" | "createdAt">;
