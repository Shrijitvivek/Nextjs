import TaskForm from "../components/TaskForm"

export default function AddTaskpage() { // taskform comp added which contains task creation logic
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <TaskForm/>  
    </div>
  )
}
