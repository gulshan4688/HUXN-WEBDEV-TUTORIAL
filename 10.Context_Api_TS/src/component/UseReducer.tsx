import { useReducer } from "react"

// we will create type for the state and action
type Action={type:'INCREAMENT'} | {type:'DECREAMENT'};
type State={count:number};


const reducer=(state:State,action:Action):State =>{
switch (action.type) {
    case 'INCREAMENT': 
        return {count:state.count+1}
    case 'DECREAMENT':
        return {count:state.count-1}
    default:
        return state;
}
}

const UseReducer = () => {

    const [state,dispatch]=useReducer(reducer,{count:0}) // here count:0 is the initial state as the syntax says


  return (
    <div>
        <h2>Count:{state.count}</h2>
        {/* In the given code, the dispatch function is used to send actions to the reducer function, which is responsible for determining how the state should be updated based on the action. */}
        <button onClick={()=>dispatch({type:'INCREAMENT'})} >INCREAMENT</button>
        <button onClick={()=>dispatch({type:'DECREAMENT'})} >DECREAMENT</button>
    </div>
  )
}

export default UseReducer