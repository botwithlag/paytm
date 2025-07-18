/*
  Warnings:

  - Added the required column `recieverName` to the `P2PTransactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderName` to the `P2PTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "P2PTransactions" ADD COLUMN     "recieverName" TEXT NOT NULL,
ADD COLUMN     "senderName" TEXT NOT NULL;
