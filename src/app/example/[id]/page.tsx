import Link from "next/link"; // Server-Side
import React from "react";
const posts = [
  {
    id: 1,
    content: "Hello, world!",
  },
  {
    id: 2,
    content: "Hello, again, world!",
  },
  {
    id: 3,
    content: "Hello, yet again, world!",
  },
];
export default function ExamplePage({ params }: { params: any }) {
  const { id }: { id: any } = React.use(params);
  return (
    <>
      <Link href="/">Go Home!</Link>
      <br />
      <h1>Post Number #{id}</h1>
      <p>{posts.find((post) => post.id == id)?.content}</p>
    </>
  );
}
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
export const dynamicParams = false;
