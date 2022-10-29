const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    content:{type:String,required:true},
    isCompleted:{Boolean,default:false},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true}
})

const Task=mongoose.model("task", taskSchema);
module.exports=Task;