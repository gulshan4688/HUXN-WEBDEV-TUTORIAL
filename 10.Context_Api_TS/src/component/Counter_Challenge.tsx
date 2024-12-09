import { useReducer } from "react"
import {CountReducer} from "./CounterReducer"



const Counter_Challenge = () => {
    const[state,dispatch]=useReducer(CountReducer, {count:0});
  return (
    <div>
        <h2>Count:{state.count}</h2>
        <button onClick={()=>dispatch({type:'increament'})}>increament</button>
        <button onClick={()=>dispatch({type:'decreament'})}>decreament</button>
    </div>
  )
}

export default Counter_Challenge