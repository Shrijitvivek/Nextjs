import TaskCard from "./components/TaskCard";

export default async function Homepage() {
  let tasks: any[] = [];
  let singleTask: any = null;

  try {

    const resAll = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store", 
    });

    if (resAll.ok) {
      tasks = await resAll.json();
    } else {
      console.error("Failed to fetch all tasks:", resAll.statusText);
    }

    const taskId = "64f123abc456def7890"; 
    const resSingle = await fetch(
      `http://localhost:3000/api/tasks/${taskId}`,
      { cache: "no-store" }
    );

    if (resSingle.ok) {
      singleTask = await resSingle.json();
    } else {
      console.error("Failed to fetch single task:", resSingle.statusText);
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      {tasks.length === 0 ? (
        <p>No Tasks Found. Add One!</p>
      ) : (
        <div className="space-y-3 mb-6">
          {tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} />
          ))}
        </div>
      )}

      {singleTask && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Single Task</h2>
          <TaskCard task={singleTask} index={0} />
        </div>
      )}
    </div>
  );
}
