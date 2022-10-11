import React, { useState, useEffect } from 'react';

const ShowTime = () => {
   const [time, setTime] = useState("")


   useEffect(() => {
    setInterval(()=> {
   setTime(new Date().toLocalString())
    
    },1000)
})


   


    return (
        <p>
            Zegar {time}
           
        </p>
    )
}



export default ShowTime

