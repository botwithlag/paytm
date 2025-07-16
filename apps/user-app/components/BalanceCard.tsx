import Card from "@repo/ui/card"
const BalanceCard=({balance,locked}:{balance:number,locked:number})=>{
 
return(
    <div className="w-full">
        <Card title={"Balance"}>
         <div className="w-full ">
            <div className="border-b border-gray-500 flex justify-between p-2" >
               <h1>Unlocked Balance</h1>
               <h1>{balance}</h1>
            </div>
            <div className="border-b border-gray-500 flex justify-between p-2" >
               <h1>Total locked Balance</h1>
               <h1>{locked}</h1>
            </div>
            <div className=" flex justify-between p-2" >
               <h1>Total Balance</h1>
               <h1>Rs +{900}</h1>
            </div>
         </div>

        </Card>
    </div>
)


}
export default BalanceCard