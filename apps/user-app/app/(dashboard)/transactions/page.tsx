import Center from "@repo/ui/center"
import Card from "@repo/ui/card"
import { getTransactions } from "../../lib/actions/getTransactions"
import OnRampTransactionsCard from "../../../components/OnRampTransaction"
export default async function transaction() {
    const transactions=await getTransactions()
    return <div className="min-h-screen min-w-screen  ">
        <h1 className="text-4xl font-bold p-2 text-[#6a51a6]">Transactions</h1>
         <Center>

         <OnRampTransactionsCard transactions={transactions}/>
           
         </Center>
    </div>
}