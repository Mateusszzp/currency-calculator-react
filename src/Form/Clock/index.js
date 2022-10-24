import "./style.css"
import React, { useState, useEffect, } from 'react';

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
      <span className="time">Dzisiaj jest {myDate(time)}</span>
    </p>
  )
};
export default Clock;

