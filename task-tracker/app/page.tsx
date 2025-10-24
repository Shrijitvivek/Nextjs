import TaskCard from "./components/TaskCard";

export default async function Homepage() {
  try {
    const resAll = await fetch("http://localhost:3000/api/tasks", { cache: "no-store" });
    const tasks = resAll.ok ? await resAll.json() : [];

   
    const taskId = "64f123abc456def7890";
    const resSingle = await fetch(`http://localhost:3000/api/tasks/${taskId}`, { cache: "no-store" });
    const singleTask = resSingle.ok ? await resSingle.json() : null;

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
