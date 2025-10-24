import { NextResponse } from "next/server";

export async function GET(){
    const task = 'hello'
    return NextResponse.json(task)
}