import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [counter, setCounter] = useState<Map<string, number> | null>(null);

  useEffect(() => {
    const down = setTimeout(() => {
      setCounter(new Map([["hours", 0]]));
    });

    return () => clearTimeout(down);
  });
};
