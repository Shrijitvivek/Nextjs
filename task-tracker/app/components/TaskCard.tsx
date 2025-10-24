"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TaskCard({ task, index }: { task: any; index: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(`Are you sure you want to delete "${task.title}"?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/tasks", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: task._id }),
      });

      if (res.ok) {
        alert("Task deleted successfully!");
        router.refresh();
      } else {
        alert("Failed to delete task!");
      }
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="border border-gray-600 p-4 rounded-md bg-gray-900 text-white flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">
          {index + 1}. {task.title}
        </h2>

          {task.description && (
          <p className="text-lg text-gray-300 mt-1">
            {task.description}
          </p>
        )}
        <p className="text-sm mt-1">
          Status:{" "}
          <span
            className={`${
              task.status === "Completed"
                ? "text-green-400"
                : task.status === "In-Progress"
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {task.status}
          </span>
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          href={`/tasks/${task._id}`}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
