import "./style.css"
import React, { useState, useEffect, } from 'react';


    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString(undefined, {
                weekday: "long", day: "numeric", month: "long", hour: "numeric",
                minute: "numeric", second: "numeric"
            }))
        }, 1000)
    })





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

