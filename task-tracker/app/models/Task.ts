import mongoose, { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false }
  
},
{timestamps:true});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
