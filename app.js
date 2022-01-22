const express=require('express')
const app=express()
const tasks=require('./routes/routes')
const connectDB=require('./db/connect')
require('dotenv').config()

app.use(express.json())

app.use('/api/v1/tasks',tasks)

const PORT=3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{console.log(`server is listening at port ${PORT}`);})
    }catch(err){
        console.log(err);
    }
}

start()

