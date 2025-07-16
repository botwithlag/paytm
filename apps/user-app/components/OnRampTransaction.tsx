import Card from "@repo/ui/card";
export interface Transaction{
    time:Date,
    amount:number,
    provider:string,
    status:string
}[]
const OnRampTransactionsCard=({transactions}:{transactions:Transaction[]})=>{
if(transactions.length)
{
    return <div className="w-full">
        <Card title="Recent Transactions">
           {transactions.map((transaction)=>{
         return (<div className="p-2 flex justify-between gap-5 w-full">
           <div className="  text-sm">
             Recieved INR
           </div>
           <div className="text-sm ">
             {transaction.time.toDateString()}
           </div>
            <div className="text-sm font-bold">
              + Rs{transaction.amount/100}
           </div>
        </div>)
    }
)}
    </Card>
    </div>
}

  return  <Card title="Recent Transactions">
       NO RECENT TRANSACTIONS
    </Card>

 
}


export default OnRampTransactionsCard