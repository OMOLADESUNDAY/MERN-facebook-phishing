const express=require('express')
const {router}=require('./route/info')
const {connectDB}=require('./db/connect')
require('dotenv').config()
//app config
const app=express()

const MongoDbUrl= process.env.MONGOURL
const port =process.env.PORT || 5000 
//middleware
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/post", router);
//db config



//Listener
const start=async()=>{
    try {
        await connectDB(MongoDbUrl)
        app.listen(port, () => console.log(`listening at port ${port}`));    
    } catch (error) {
        console.log(error)
    }
}

start()
