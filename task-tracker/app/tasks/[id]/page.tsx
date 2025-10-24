"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditTaskPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [task, setTask] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`/api/tasks/${id}`);
        if (!res.ok) throw new Error("Task not found");
        const data = await res.json();
        setTask(data);
        setTitle(data.title);
        setDescription(data.description);
        setStatus(data.status);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch task");
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [id]);

 
  const handleUpdate = async () => {
    try {
      const res = await fetch("/api/tasks", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, description, status }),
      });

      if (res.ok) {
        alert("Task updated successfully!");
        router.push("/"); 
      } else {
        alert("Failed to update task");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="p-4 text-white">Loading...</p>;
  if (!task) return <p className="p-4 text-red-500">Task not found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-900 rounded-md text-white">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>

      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        className="w-full p-2 mb-4 text-white rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Description</label>
      <textarea
        className="w-full p-2 mb-4 text-white rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Status</label>
      <select
        className="w-full p-2 mb-4 text-blue-600 rounded-md"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button
        onClick={handleUpdate}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
      >
        Update Task
      </button>
    </div>
  );
}
