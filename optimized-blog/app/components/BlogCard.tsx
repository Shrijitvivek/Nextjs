import Image from "next/image";

export default function BlogCard({ post }: { post: any }) {
  return (
    <article className="p-4 border rounded-xl bg-white shadow hover:shadow-lg transition-transform hover:-translate-y-1">
      <Image
        src="/images/blog.jpg" // blog img
        alt="Blog Image"
        width={600}
        height={300}
        className="rounded-lg object-cover"
        priority={post.id === 1}
      />
      <h3 className="text-lg font-semibold mt-3 text-blue-700">{post.title}</h3>
      <p className="text-gray-600 mt-1 leading-relaxed">{post.body}</p>
    </article>
  );
}
 