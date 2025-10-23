import Link from "next/link"

export default function TaskCard({task , index} : {task : any , index : number}) {
  return (
    <div className="border p-4 rounded">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        {/* <p className="text-sm mb-2">{task.description}</p> */}
        <Link href={`/tasks/${task._id}`}>View Details</Link>
    </div>
  )
}
