"use client";

import Link from "next/link"; // Server-Side
import { useRouter } from "next/navigation"; // Client-Side
import React from "react";
export default function ExamplePage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const router = useRouter();
  const { name }: { name: any } = React.use(searchParams);
  const { id }: { id: any } = React.use(params);
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
