
import { getServerSession } from "next-auth"
import AddMoneyCard from "../../../components/AddMoneyCard"
import BalanceCard from "../../../components/BalanceCard"
import OnRampTransactionsCard from "../../../components/OnRampTransaction"
import type { Transaction } from "../../../components/OnRampTransaction"
import { getTransactions } from "../../lib/actions/getTransactions"
import prisma from "@repo/db/client"
import { authOptions } from "../../lib/auth"

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


export default async function transfer(){
    const balance=await getBalance()
    let transactions= await getTransactions()
    const transactionsSlice=transactions.slice(5)
 return <div className="min-w-screen ">
        <h1 className="text-3xl m-4 text-[#6a51a6] font-bold block">Transfer</h1>   
        
       <div className="grid grid-cols-1 md:grid-cols-2 min-w-full">
        <div>
            <AddMoneyCard/>
        </div>
        <div >
            <div>
             <BalanceCard balance={balance.amount??0} locked={balance.locked??0}></BalanceCard>
            </div>
            <div>
             <OnRampTransactionsCard transactions={transactionsSlice}/>
            </div>
        </div>
        
       </div>
   
</div>
}