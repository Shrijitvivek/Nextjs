
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import TaskCard from "./components/TaskCard";
import dbcon from "@/app/lib/mongodb";
import Task from "@/app/models/Task";

export default async function Homepage() {
  try {
   
    await dbcon();

   
    const tasks = await Task.find().sort({ createdAt: -1 }).lean();

    
    const taskId = "64f123abc456def7890";
    const singleTask = await Task.findById(taskId).lean();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

        {tasks.length ? (
          <div className="space-y-3 mb-6">
            {tasks.map((task: any, index: number) => (
              <TaskCard key={task._id} task={task} index={index} />
            ))}
          </div>
        ) : (
          <p>No Tasks Found. Add One!</p>
        )}

        {singleTask && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Single Task</h2>
            <TaskCard task={singleTask} index={0} />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return <p className="p-4 text-red-500">Failed to load tasks.</p>;
  }
}
