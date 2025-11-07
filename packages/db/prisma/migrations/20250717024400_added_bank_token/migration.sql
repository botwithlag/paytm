-- CreateTable
CREATE TABLE "Banktoken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Banktoken_pkey" PRIMARY KEY ("id")
);
