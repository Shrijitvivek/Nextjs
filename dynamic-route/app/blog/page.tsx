import Link from "next/link";

const blogs = [
  { id: 1, title: "First Blog Post" },
  { id: 2, title: "Second Blog Post" },
  { id: 3, title: "Third Blog Post" },
];

export default function BlogPost() {
  return (
    <div>
      <h1> Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
