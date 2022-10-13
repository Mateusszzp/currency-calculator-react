import React, { useState, useEffect, } from 'react';
import moment from 'moment';
const ShowTime = () => {
    const [time, setTime] = useState("")

    const myDate = new Date().toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    useEffect(() => {
        setInterval(() => {
            setTime(myDate)
        }, 2000)

    },[time])
    console.log(myDate)

    return (
        <p>
            {time}
        </p>
    )
}
export default ShowTime

