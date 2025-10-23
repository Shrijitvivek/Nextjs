import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray p-4 mb-6">
    <div className="container mx-auto flex gap-4">
      <Link href='/'>Home</Link>
      <Link href='/add'>Add Task</Link>
    </div>
    </nav>
  )
}
