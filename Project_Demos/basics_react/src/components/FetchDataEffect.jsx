import React from 'react'
import { useEffect, useState } from "react";


const FetchDataEffect = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        async function getData() {
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data= await response.json();
            setData(data);
        }
        getData();
    },[])

  return (
    <div>
        <h2>Data</h2>
        {data.length>0 ? <h1>posts:{data[0].title}</h1>: <li>Loading...</li>}
    </div>
  )
}

export default FetchDataEffect