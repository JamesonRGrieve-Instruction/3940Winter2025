"use client";

import Link from "next/link"; // Server-Side
import { useRouter } from "next/navigation"; // Client-Side
import React from "react";
export default function ExamplePage({ params, searchParams }) {
  const router = useRouter();
  const { name } = React.use(searchParams);
  const { id } = React.use(params);
  return (
    <>
      <h1>Hello, Again, World!</h1>
      <Link href="/">Go Home!</Link>
      <br />
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Home Client
      </button>
      <p>ID Slug: {id}</p>
      <p>Name Search Param: {name}</p>
    </>
  );
}
