"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function OutputPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  useEffect(() => {
    // Redirect if parameters are missing
    if (!firstName || !lastName) {
      router.push("/input");
    }
  }, [firstName, lastName, router]);

  // Render placeholder or null while redirecting
  if (!firstName || !lastName) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Your Name</h1>
      <p className="mt-4 text-xl">
        {firstName} {lastName}
      </p>
    </main>
  );
}
