import { MyContext } from "./MyContext"
import { FC,useContext } from "react"
import { MyContextProps } from "./MyContext";

const Counter:FC = () => {

   const {count,increment,decrement}= useContext<MyContextProps>(MyContext);

  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={increment} >increment</button>
        <button onClick={decrement} >decrement</button>
    </div>
  )
}

export default Counter