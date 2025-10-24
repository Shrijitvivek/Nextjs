import mongoose, { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  status :{type:String,
    enum :['Pending' , 'Completed' , 'In-Progress'],
    default : 'Pending'
  }
  
},
{timestamps:true});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
