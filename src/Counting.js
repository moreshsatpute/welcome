import React, { useState } from 'react'

const Counting = () => {
const [count, setCount]=useState(1)

        const evenAdd=()=>{
            setCount((prev)=>prev*2)
            // setCount(count+1)
            

            
        }
       
        const eventSub = () => {
            // setCount(count-1)
            setCount((prev)=>prev-1)

        }

  return (
    <div style={{fontSize:"24px "}}>

        <button onClick={eventSub}>-</button>
        <span >Count:{count}</span>
        <button onClick={evenAdd}>+</button>
        
    </div>
  )
};

export default Counting;