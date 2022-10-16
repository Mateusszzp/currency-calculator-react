import "./style.css"
import React, { useState, useEffect, } from 'react';



const ShowTime = () => {
  const [time, setTime] = useState(new Date().toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }))
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [time]);
  return (
    <p>
      <span className="time">Dzisiaj jest {time}</span>
    </p>
  )
}
export default ShowTime

