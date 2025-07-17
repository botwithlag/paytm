"use server"
import prisma from "@repo/db/client"
async function p2ptransaction({phonenumber,amount}:{phonenumber:string,amount:number}) {
const db_amount= amount*100
    prisma.$transaction([

    ])
} 