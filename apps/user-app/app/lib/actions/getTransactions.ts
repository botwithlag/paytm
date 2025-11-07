"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
export async function getTransactions()
{
    const session=await getServerSession(authOptions);
    const transactions=await prisma.onRampTransaction.findMany({
        where:{
           userId:Number(session?.user?.id)
        }
    })
     return transactions.map(t=>({
          
            status:t.status,
            amount:t.amount,
            time:t.startTime,
            provider:t.provider
          
    }))

}