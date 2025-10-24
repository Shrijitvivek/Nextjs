"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TaskForm() {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    SetTitle("");
    SetDescription("");
    router.push("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      className="border p-2 w-full"
        placeholder="Task Title"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />

      <textarea
      className="my-5 border p-2 w-full"
      placeholder="Description"
      value={description}
      onChange={(e)=> SetDescription(e.target.value)}/>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
}
