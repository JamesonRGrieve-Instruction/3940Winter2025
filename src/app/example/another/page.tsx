"use client";

import Link from "next/link"; // Server-Side
import { useRouter } from "next/navigation"; // Client-Side
export default function ExamplePage() {
  const router = useRouter();
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
    </>
  );
}
