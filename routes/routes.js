const express=require('express')
const router=express.Router()
const {getAllTasks,createTask,updateTask,getTask,deleteTask}= require('../controllers/routes')

router.route('/').get(getAllTasks)
                 .post(createTask)

router.route('/:id').get(getTask)
                    .get(deleteTask)
                    .get(updateTask)


module.exports= router