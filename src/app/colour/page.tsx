"use client";

import { useState } from "react";

export default function ColourPage() {
  const [colour, setColour] = useState<string>("white");

  return (
    <div className={`w-full h-32`} style={{ backgroundColor: `#${colour}` }}>
      <button
        onClick={() => {
          setColour(
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
          );
        }}
      >
        Change Colour!
      </button>
    </div>
  );
}
