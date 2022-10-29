const express=require("express");
const Task = require("../schema/task.schema");
const taskRoute=express.Router();

taskRoute.get("/", async(req,res)=>{
    let tasks=await Task.find({}).populate("author");
    res.send(tasks);
});

taskRoute.get("/:id", async(req,res)=>{
    let tasks=await Task.findById(req.params.id)
    res.send(tasks)
})

taskRoute.post("/",async(req,res)=>{
    try{
        const tasks=new Task(req.body)
        await tasks.save()
        res.send(tasks)
    }catch(err){
        res.status(401).send(err.message)
    }
})

taskRoute.patch("/:id",async (req,res)=>{
    try{
        const tasks=new Task(req.body)
        await tasks.save()
        res.send(tasks)
    }catch(err){
        res.status(401).send(err.message)
    }
})

taskRoute.delete("/:id",async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.send("Deleted Successfully")
    }catch(err){
        res.status(401).send(err.message)
    }
} )
module.exports=taskRoute;