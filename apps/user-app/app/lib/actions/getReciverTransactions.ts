"use server"

import db from '@repo/db/client'
import { authOptions } from "../auth"
import { getServerSession } from "next-auth"
const getRecieverTransactions=async()=>{

const session=await getServerSession(authOptions)
const reciever=Number(session?.user?.id)
const recieverTransactions=await db.p2PTransactions.findMany({
    where:{
        reciever:reciever
    }
})
return recieverTransactions

}

export default getRecieverTransactions