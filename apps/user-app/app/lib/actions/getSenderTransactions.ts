"use server"

import db from '@repo/db/client'
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"
const getSenderTransactions=async()=>{

const session=await getServerSession(authOptions)
const sender=Number(session?.user?.id)
const senderTransactions=await db.p2PTransactions.findMany({
    where:{
        sender:sender
    }
})
return senderTransactions

}

export default getSenderTransactions