"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((old) => old + 1);
        }}
      >
        Count Up!
      </button>
    </>
  );
}
