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



app.use("/",(req,res)=>{
    res.json({message : "server is up and running..."})
})





app.listen(port ,()=>{
    console.log(`server up and running on  http://localhost:${port}`);
})
