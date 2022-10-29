const express=require("express");
const User = require("../schema/user.schema");

const userRoute=express.Router();

userRoute.get("/", async(req,res)=>{
    let users=await User.find({});
    res.send(users);
})

userRoute.get("/:id", async(req,res)=>{
    let users=await User.findOne({_id:req.params.id});
    res.send(users)
});

userRoute.post("/", async(req,res)=>{
    try{
        const users=new User(req.body)
        await users.save()
        res.send(users)
    }catch(err){
        res.status(401).send("Operation not allowed")
    }
})

userRoute.delete("/:id", async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.send("Deleted Successfully")
    }catch(err){
        res.status(401).send(err.message)
    }
})
module.exports=userRoute;