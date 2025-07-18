import P2PtransactionCard from "../../../components/P2pTransactionCard"
import Center from "@repo/ui/center"
import BalanceCard from "../../../components/BalanceCard"
import getBalance from "../../lib/actions/getBalance"
import SenderRecieverCard from "../../../components/SenderReciverCard"
const  P2PtransactionComponent =async()=>{
  const balance=await getBalance()
    return <div className="min-w-screen grid grid-cols-1  md:grid-cols-2">
          <div className="w-full">
            <P2PtransactionCard/>
             
          </div>
        <div>
              <SenderRecieverCard/>
              <BalanceCard balance={balance.amount??0} locked={balance.locked??0}/>

          </div>
             
    </div>
}

export default P2PtransactionComponent