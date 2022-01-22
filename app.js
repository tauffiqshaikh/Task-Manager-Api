const express=require('express')
const app=express()
const tasks=require('./routes/routes')
app.use(express.json())

app.use('/api/v1/tasks',tasks)





const PORT=5000
app.listen(PORT,()=>{console.log(`server is listening at port ${PORT}`);})