import { useEffect, useState } from "react";

export function LoadingView() {
  const [remainingTime, setRemainingTime] = useState(2); // 1

  useEffect(() => {
    setInterval(() => {
      console.log("cb is called", remainingTime);
      setRemainingTime(Math.max(remainingTime - 1, 0));
    }, 1000);
  }, []);

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
