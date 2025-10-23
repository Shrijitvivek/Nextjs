import { NextResponse } from "next/server";
import dbcon from "@/app/lib/mongodb";
import Task from "@/app/models/Task";

export async function GET() {
  await dbcon();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  await dbcon();
  const data = await req.json();
  const newTask = await Task.create(data);
  return NextResponse.json(newTask, { status: 201 });
}
