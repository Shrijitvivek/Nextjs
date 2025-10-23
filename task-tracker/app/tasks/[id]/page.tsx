interface Params {
  id: string;
}

export default async function TaskDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params; 

  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Task not found</h1>;
  }

  const task = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="mt-2 text-white">{task.description}</p>
    </div>
  );
}
