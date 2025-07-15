import { getServerSession } from "next-auth";
import { NextResponse,NextRequest } from "next/server";
import { authOptions } from "../lib/auth";
export async function GET(){
const session= await getServerSession(authOptions)
if(!session.user.id)
{
    return NextResponse.json({
        message:"User not signed in "
    })
}

const randomToken=Math.random()
const token=randomToken.toString()

 
 return NextResponse.json({
    token
 },{
    status:400
 })


}