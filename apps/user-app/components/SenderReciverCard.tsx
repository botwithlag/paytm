import Card from "@repo/ui/card";
import getSenderTransactions from "../app/lib/actions/getSenderTransactions";
import getRecieverTransactions from "../app/lib/actions/getReciverTransactions";
import transaction from "../app/(dashboard)/transactions/page";


interface P2Ptransaction{
    sender:number
  senderName:string
  recieverName: string
  reciever: string
  amount: number
  time: Date}
const SenderRecieverCard=async()=>{
    const strans= await getSenderTransactions()
    const rtrans = await getRecieverTransactions()
    return <div className="md:flex h-auto w-full">
       <Card title=" Sent">
        {
            strans.map((t)=>{
                return (
                <div className="flex gap-2  text-sm">
                    <div className="font-bold">
                        {t.recieverName}
                    </div>
                    <div>
                        {t.time.toDateString()}
                    </div>
                    <div className="text-red-500 font-bold">
                       -{t.amount/100}
                    </div>
                </div>
                )
            })
        }
       </Card>
       <Card title="Recieved">
         {

 
            rtrans.map((t)=>{
                return (
                <div className="flex gap-2 m-2 ">
                    <div>
                        {t.senderName}
                    </div>
                    <div>
                        {t.amount/100}
                    </div>
                    <div>
                        {t.time.toDateString()}
                    </div>
                </div>
                )
            })
        }
       </Card>
    </div>
}
export default SenderRecieverCard