import { useState, useEffect } from 'react'

export const useCurrentDate = () => {
  const [time, setTime] = useState(new Date());

  const myDate = (time) => {
    return time.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [time]);
  
  return { myDate, time }
};