const express=require("express");
const userRoute = require("./route/users.route");
const mongoose=require("mongoose");
const taskRoute = require("./route/task.route");

const app=express();
app.use(express.json());
app.use("/users",userRoute);
app.use("/tasks", taskRoute);

app.listen(8080,()=>{
    mongoose.connect("mongodb://localhost:27017/evaluation")
    console.log("server started")
})