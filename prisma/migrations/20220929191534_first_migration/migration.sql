-- CreateEnum
CREATE TYPE "pLevels" AS ENUM ('p1', 'p2', 'p3', 'p4');

-- CreateTable
CREATE TABLE "priorityLevels" (
    "id" SERIAL NOT NULL,
    "priorityLevel" "pLevels" NOT NULL,

    CONSTRAINT "priorityLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processes" (
    "id" SERIAL NOT NULL,
    "processNumber" TEXT NOT NULL,
    "task" TEXT,
    "deadline" DATE NOT NULL,
    "isSolved" BOOLEAN NOT NULL DEFAULT false,
    "priorityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "processes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "priorityLevels_priorityLevel_key" ON "priorityLevels"("priorityLevel");

-- CreateIndex
CREATE UNIQUE INDEX "processes_processNumber_task_userId_key" ON "processes"("processNumber", "task", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "priorityLevels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
