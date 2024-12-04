import React from 'react'
import { useEffect, useState } from "react";


const UseEffectsBasics = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setData(data);
      }
      getData();
   
    }, [])
  

  return (
    <div>
        {data.map((todo, index) => {
        return <li key={index} >{todo.id}</li>
      })}
    </div>
  )
}

export default UseEffectsBasics