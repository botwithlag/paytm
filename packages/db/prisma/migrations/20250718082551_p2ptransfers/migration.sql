-- CreateTable
CREATE TABLE "P2PTransactions" (
    "id" SERIAL NOT NULL,
    "sender" INTEGER NOT NULL,
    "reciever" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "P2PTransactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "P2PTransactions" ADD CONSTRAINT "P2PTransactions_sender_fkey" FOREIGN KEY ("sender") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2PTransactions" ADD CONSTRAINT "P2PTransactions_reciever_fkey" FOREIGN KEY ("reciever") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
