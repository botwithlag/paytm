import { PrismaClient } from "@prisma/client";

const PrismaSingleton=()=>{
 return new PrismaClient()
}


declare global{
  var prismaGlobal:undefined|ReturnType<typeof PrismaSingleton>
}

const prisma:ReturnType<typeof PrismaSingleton>=globalThis.prismaGlobal??PrismaSingleton()


if(process.env.NODE_ENV!=='production') globalThis.prismaGlobal=prisma


export default prisma


