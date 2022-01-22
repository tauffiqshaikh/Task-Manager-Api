const Task= require('../models/Task')

const getAllTasks=(req,res)=>{
    res.send('all items')
}

const createTask= async(req,res)=>{
    const task= await Task.create(req.body)
    res.status(201).json(task)
}

const getTask=(req,res)=>{
    res.json(req.body)
}

const updateTask=(req,res)=>{
    res.send('update task')
}

const deleteTask=(req,res)=>{
    res.send('delete task')
}

module.exports={
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}