/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Banktoken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Banktoken_token_key" ON "Banktoken"("token");
