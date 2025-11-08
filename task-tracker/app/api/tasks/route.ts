import { NextResponse } from "next/server";
import dbcon from "@/app/lib/mongodb";
import Task from "@/app/models/Task";

export async function GET() { // findtasks
  await dbcon();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) { //create tasks
  await dbcon();
  const data = await req.json();
  const newTask = await Task.create({
    title : data.title,
    description : data.description,
    status : data.status || 'Pending'
  });
  return NextResponse.json(newTask, { status: 201 });
}

export async function PUT(req: Request) { // update tasks
  await dbcon();
  const { id, ...updatedData } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
  }

  const updatedTask = await Task.findByIdAndUpdate(id, updatedData, { new: true });

  if (!updatedTask) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTask, { status: 200 });
}


export async function DELETE(req: Request) { // delete tasks
  await dbcon();
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
  }

  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
}