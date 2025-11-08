import dynamic from "next/dynamic";
import BlogCard from "./components/BlogCard";

const ChartClient = dynamic(() => import("./components/ChartClient"), {
  ssr: false,
  loading: () => <p className="text-center text-gray-500">Loading chart...</p>,
});

export const revalidate = 15

async function getPosts(){
  const res = await fetch("https://json.placeholder.typicode.com/posts?_limit=3")
}