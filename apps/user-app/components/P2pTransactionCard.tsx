"use client"
import { useState } from "react"
import Input from "@repo/ui/textinput"
import Card from "@repo/ui/card"
import Center from "@repo/ui/center"
import { Button } from "@repo/ui/button"
const P2PtransactionCard=()=>{

    const [amount,setAmount]=useState('')
    const [phoneNo,setPhoneNo]=useState('')

    return <div className="w-full">
        <Card title="Send Money">
        <div className="p-3 h-[50vh] w-auto">
        <div className="mb-2">
            <Input placeholder="Number" setData={(value)=>setPhoneNo(value)} label="Number"/> 
        </div>
        <div className="mb-2">
            <Input placeholder="Amount" setData={(value)=>setAmount(value)} label="Amount"/> 
        </div>
        <div className="flex justify-center mb-2">
            <Button onClick={()=>{}}>Send</Button>
        </div>
        
    </div>
    </Card>
    </div>

}

export default P2PtransactionCard