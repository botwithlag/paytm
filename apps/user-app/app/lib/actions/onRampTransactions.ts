"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from '@repo/db/client'
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";
import axios from "axios";
 

 const onRampTransaction=async(provider:string,amount:number)=>{
    const session=await getServerSession(authOptions);
    if(!session.user?.id)
    {
        console.log("User not found ")
         return NextResponse.json({
        message: "User not authenticated or ID not found"
    }, { status: 401 });
    }
  try{
    const request=await axios.get('http://localhost:3003/bankserver',{
        params:{
            userId:Number(session.user.id)
        }
    })
    if(!request.data||!request.data.token)
    {
        console.log("BAD RESPONSE UNABLE TO FETCH TOKEN")
        return NextResponse.json(
            {
                message:"Unable to get token form bank"
            }
        )
    }
    const token:string=request.data.token
    await prisma.onRampTransaction.create({
        data:{
            status:"Processing",
            token:token,
            provider:provider,
            amount:amount,
            startTime:new Date(),
            userId:Number(session?.user?.id),
        }
    })
    
    return NextResponse.json({
        message:"Done"
    })

  }
  catch(e)
  {
    NextResponse.json({
        message:"Unexpected Error Occured"
    })
  }


 }
 export default onRampTransaction

