import UseFetch from "./components/UseFetch"
import { useState } from "react"
function App() {

  const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data && data.map((item) => {
        return <p key={item.id} >{item.title}</p>
      })}
    </>
  )
}

export default App
