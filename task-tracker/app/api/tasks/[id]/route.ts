import { NextResponse } from "next/server";
import dbcon from "@/app/lib/mongodb";
import Task from "@/app/models/Task";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 
  await dbcon();
  const task = await Task.findById(id);

  if (!task) {
    return NextResponse.json({ message: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}
