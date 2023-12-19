import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <button
      type="button"
      onClick={() => setCounter((prev) => prev + 1)}
      className="bg-purple-600 py-2 px-3 text-white rounded font-bold"
      // Explicitly specify the type for the button element
      {...({} as any)}
    >
      Count: {counter}
    </button>
  );
}
