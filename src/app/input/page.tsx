"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function InputPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
    reversed: boolean
  ) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedFirstName || !trimmedLastName) {
      setError("Both first and last names are required.");
      return;
    }

    const params = new URLSearchParams({
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
    });

    if (reversed) {
      router.push(`/output/name-reversed?${params.toString()}`);
    } else {
      router.push(`/output/name?${params.toString()}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black text-white">
      <h1 className="text-2xl font-semibold mb-6">Enter Your Name</h1>
      <form
        onSubmit={(e) => {
          /* Default submit prevented, handled by buttons */ e.preventDefault();
        }}
        className="w-full max-w-sm space-y-4"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-300"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-500"
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-300"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-500"
            placeholder="Enter Last Name"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-between space-x-4 pt-4">
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e, false)
            }
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900"
          >
            Show FirstName LastName
          </button>
          <button
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e, true)
            }
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900"
          >
            Show LastName, FirstName
          </button>
        </div>
      </form>
    </main>
  );
}
