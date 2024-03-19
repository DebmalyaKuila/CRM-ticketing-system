const express=require("express")
const helmet=require("helmet")
const cors=require("cors")
const logger=require("morgan")

const port=process.env.PORT || 8000
const app=express()

//API security
app.use(helmet())
//handle cors error
app.use(cors())
//logger
app.use(logger("combined"))
//setting up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//load routers
const userRouter=require("./Routes/userRouter")
const ticketRouter=require("./Routes/ticketRouter")

//using routers
app.use("/v1/user",userRouter)
app.use("/v1/ticket",ticketRouter)


//setting up error handling
const handleError=require("./utils/errorHandler")

app.use((req,res,next)=>{
    //when no matching route is found , we are throwing a "resource not found error"
   const error=new Error("resources not found")
   error.status=404
   next(error)
})

app.use((error,req,res,next)=>{
    handleError(error,res)
})





app.listen(port ,()=>{
    console.log(`server up and running on  http://localhost:${port}`);
})
