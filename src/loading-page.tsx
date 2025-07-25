import { useEffect, useState } from "react";

function useRemainingTime() {
  const [remainingTime, setRemainingTime] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => Math.max(prev - 1, 0));
    }, 1000);
  }, []);

  return remainingTime;
}

export function LoadingView() {
  const remainingTime = useRemainingTime();

  return (
    <>
      <div className="flicker"></div>
      <br />
      <p className="loading-text">Loading...</p>

      <br />
      <p className="text-white text-center text-2xl">
        you should be good in {`${remainingTime}`}
      </p>
    </>
  );
}
