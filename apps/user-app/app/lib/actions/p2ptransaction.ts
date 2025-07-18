"use server"
import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { NextResponse } from "next/server"
async function p2ptransaction(phonenumber:string,amount:number) {

const session=await getServerSession(authOptions)
if(!session.user)
{
    return "UNAUTHORISED ACCESS"
}
const from=session.user.id;

const db_amount= amount*100

try{ prisma.$transaction(async(tsx)=>
    {

      await tsx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
      console.log("Transaction started")
      const to =await tsx.user.findFirst({
        where:{
            number:phonenumber
        }
      })
      console.log("part 1")
      if(!to){
        return new Error("Couldnt not find user")
      }
          

      const balanceFrom=await tsx.balance.findFirst({
        where:{
            userId:Number(from)
        }
      })
      console.log("Before await")
      await new Promise((r)=>setTimeout(r,4000))
      console.log("After await")

      
      if(!balanceFrom||balanceFrom.amount<amount)
      {
        console.log("InSufficient Balance")
         return  new Error("InSufficient Balance")
      }
            console.log("part 3")

      if(balanceFrom?.amount<0)
      {
                console.log("InSufficient Balance")
         return new Error("Insufficient Balance")
         
      }
            console.log("part 4")

        await tsx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount } },
          });

      await tsx.balance.updateMany({
        where:{userId:to.id },
            data:{
                amount:{
                    decrement:db_amount
                }
            }
      })
     if(!to.name)
     {
      new Error("cannot create transaction Mystery Sender")
     }
      await tsx.p2PTransactions.create({
      data:{
        sender:Number(from),
        reciever:to.id,
        amount:amount,
        senderName:session.user.name,
        recieverName:to.name??"Mystery Sender",
        time:new Date()
      }
      })

  



      console.log("Transaction finished")


    }
    )
 }
    catch(error){
   console.log("An unknown error has occured")
    }
   
} 

export default p2ptransaction