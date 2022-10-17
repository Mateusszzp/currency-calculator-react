import "./style.css"
import React, { useState, useEffect, } from 'react';



const ShowTime = () => {
    const myDate = new Date().toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    const [time, setTime] = useState(myDate)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(myDate)
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

