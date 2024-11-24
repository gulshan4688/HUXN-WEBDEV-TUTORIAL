import React, { useState } from 'react'

const Counter_2 = () => {
    const [count,setCount]=useState(0);

    const handleClick=()=>{
        setCount(count+1);
    }

  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={handleClick} >Increment</button>
    </div>
  )
}

export default Counter_2