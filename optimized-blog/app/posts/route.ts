import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    {
      id: 1,
      title: "Hello Optimization",
      body: "Fast and efficient Next.js app.",
    },
  ];
  const res = NextResponse.json(posts);
  res.headers.set(
    "Cache-Control",
    "public , s-maxage=60 , stale-while-revalidate=300"
  );
  return res;
}
