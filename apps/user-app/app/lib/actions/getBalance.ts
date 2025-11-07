"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"
async function getBalance()
{
    const session=await getServerSession(authOptions)
    const balance= await prisma.balance.findFirst(
        {
        where:{
            userId:Number(session?.user?.id)
        }
    })
    return {amount:balance?.amount,
            locked:balance?.locked }
}

export default getBalance