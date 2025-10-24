"use client";

import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
}

export default function Homepage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>("");

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (error)
    return (
      <div className="p-4 text-center text-red-600 font-medium">
        {error}
      </div>
    );

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">All Tasks</h1>

      {tasks.length ? (
        <div className="space-y-3 mb-6">
          {tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No Tasks Found. Add One!</p>
      )}
    </div>
  );
}
