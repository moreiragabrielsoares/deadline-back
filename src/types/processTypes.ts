import { Processes } from "@prisma/client";

export type INewProcess = Omit<
  Processes,
  "id" | "createdAt" | "isSolved" | "userId"
>;

export type ICreateNewProcess = Omit<
  Processes,
  "id" | "createdAt" | "isSolved"
>;

export type IProcessId = Omit<
  Processes,
  | "createdAt"
  | "isSolved"
  | "userId"
  | "processNumber"
  | "task"
  | "deadline"
  | "priorityId"
>;
