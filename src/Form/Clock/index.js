import React, { useState, useEffect, } from 'react';
import { Time } from "./styled";

const Clock = () => {
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

  return (
    <p>
      <Time className="time">
        Dzisiaj jest {myDate(time)}
      </Time>
    </p>
  )
};
export default Clock;

