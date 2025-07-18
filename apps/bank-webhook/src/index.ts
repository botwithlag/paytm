import express from "express";
import db from "@repo/db/client";
const app = express();


app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {



    
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    };

    const tokenVerified=await db.banktoken.findFirst({
        where:{
            token:paymentInformation.token
        }
    })

    if(!tokenVerified)
    {
        res.send("ERROR token cannot be verified")
    }
    
    
    if(tokenVerified?.completion)
    {
        res.send("Already completed transaction ")
    }

    try {
       const verifyBalance=await db.balance.findFirst({
        where:{
            userId:Number(paymentInformation.userId)
        }
       })

       if(!verifyBalance)
       {
        await db.$transaction([
            db.balance.create({
            data:{
                userId:Number(paymentInformation.userId),
                locked:0,
                amount:Number(paymentInformation.amount)

            }
        }), db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            }),db.banktoken.update({
                where:{
                    token:paymentInformation.token
                },
               data:{
                   completion:true
               }
            })
        ])

        return res.send("New Balanced Initalized for the user ")
       }

        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            }),
            db.banktoken.update({
                where:{
                    token:paymentInformation.token
                },
               data:{
                   completion:true
               }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})


app.get('/bankserver',async (req,res)=>{
  const userId:number=Number(req.query.userId);
  if(!userId)
  {
    console.log("Error:Unauthenticated User")
    res.send("BAD REQUEST COULDNT FIND USER")
  }

  const token=(Math.random()*1000).toString()

 try{
     await db.banktoken.create({
    data:{
        userid:userId,
        token:token,
    }
  })
   console.log("token created")
    res.send(
        {token:token,
            message:"Token Successfully Generated"
        }
    )
 }
 catch(e)
 {
    console.log("Bank:Unable to Process that request");
    return res.status(500).send("Internal Server Error: Unable to process request.");
 }
  
})

app.listen(3003);