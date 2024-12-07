import { useState } from "react";



const Counter = () => {
  const [count,setCount]=useState<number>(0);

  const clickHandle=()=>{
    setCount(count+1);
    // OR 
    // setCount((count)=>count+1);
  }

  return <div>
    <h2>Count:{count}</h2>
    <button onClick={clickHandle} >Increament</button>
  </div>;
};

export default Counter;
