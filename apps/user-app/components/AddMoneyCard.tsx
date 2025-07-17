"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import onRampTransaction from "../app/lib/actions/onRampTransactions";
import Card from '@repo/ui/card'
import Select from '@repo/ui/select'
import TextInput from '@repo/ui/textinput'
import { Button } from "@repo/ui/button";
const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];


const AddMoneyCard=()=>{

    const Router=useRouter();
    const [redirectUrl,setRedirectUrl]=useState('')
    const [amount,setAmount]=useState('')
    return <div>
        <Card title="Add Money">
            
        <div className="w-full">
           <div className="p-4">
             <TextInput placeholder={"amount"} label={"Amount"} setData={setAmount}></TextInput>
           </div>
           <div className="p-4 py">
            <h1 className="p-2 text-xl">Bank</h1>
            <Select  options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
        }))}
        onSelect={ (value)=>{setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
        }}></Select>

           </div>
           <div className="p-4 flex justify-center">
            <Button onClick={()=>{ onRampTransaction(redirectUrl,Number(amount)*100) }}>Add Money</Button>
           </div>
        </div>
        </Card>
    </div>
    
    
    
}

export default AddMoneyCard