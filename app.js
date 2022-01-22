const express=require('express')
const app=express()
const tasks=require('./routes/routes')
const connectDB=require('./db/connect')
const notFound = require('./middleware/not-found')
const {errorHandlerMiddleware}=require('./middleware/error-handler')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT= process.env.PORT ||3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{console.log(`server is listening at port ${PORT}`);})
    }catch(err){
        console.log(err);
    }
}

start()

