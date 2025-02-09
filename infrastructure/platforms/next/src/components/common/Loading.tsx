"use client";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  const [progressValue, setProgressValue] = useState(10);

  useEffect(() => {
    if (!isLoading) {
      setProgressValue(100);
      return;
    }

    const id = setInterval(() => {
      setProgressValue((prev) => {
        if (prev < 90) {
          return prev + 10;
        }
        return prev;
      });
    }, 0);
    return () => clearInterval(id);
  }, [isLoading]);
  return (
    <div className="flex flex-1 justify-center items-center h-screen">
      <span className="flex flex-col items-center space-y-2">
        <h5>Chargement en cours...</h5>
        <Progress value={progressValue} className="" />{" "}
      </span>
    </div>
  );
}
