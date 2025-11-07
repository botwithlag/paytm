import Card from "@repo/ui/card";
export interface Transaction{
    time:Date,
    amount:number,
    provider:string,
    status:string
}[]
const OnRampTransactionsCard=({transactions,title}:{transactions:Transaction[],title:string})=>{
transactions=transactions.reverse()
if(transactions.length)

{
    return <div className="w-full">
        <Card title="Recent Transactions">
           {transactions.map((transaction,index)=>{
         return (<div className="p-2 flex justify-between gap-5 w-full ">
           <div className="  text-sm w-full">
             Recieved INR
           </div>
           <div className="text-sm w-full">
             {transaction.time.toDateString()}
           </div>
            <div className="text-sm font-bold w-full">
              Rs{transaction.amount/100}
           </div>
    
    {
      transaction.status==="Success"?(
         <div className="text-sm font-bold w-full text-green-500">
              {transaction.status}
           </div>):
        (<div className="text-sm font-bold w-full ">
              {transaction.status}
           </div>)
    }
        </div>)
    }
)}
    </Card>
    </div>
}

  return  <Card title={title}>
       NO RECENT TRANSACTIONS
    </Card>

 
}


export default OnRampTransactionsCard