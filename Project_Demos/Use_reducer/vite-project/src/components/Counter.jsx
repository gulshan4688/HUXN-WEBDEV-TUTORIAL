import React from 'react'
import { useReducer, useState } from 'react'
import { CounterReducer, initialState } from './CounterReducer'

const Counter = () => {
    // create use Reducer
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    // so here reducer is component function imported from another component
    const [inputValue, setinputValue] = useState(0);

    const handleIncrementAmout = () => {
        dispatch({ type: "incrementByAmount", payLoad: Number(inputValue) });
        setinputValue(0);
    }
    const handleDecrementAmout = () => {
        dispatch({ type: "decrementByAmount", payLoad: Number(inputValue) });
        setinputValue(0);
    }

    return (
        <div>
            <h2>count:{state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })} >+</button>
            <button onClick={() => dispatch({ type: "decrement" })} >-</button>
            <div>
                <input type="number" value={inputValue} onChange={(e) => { setinputValue(e.target.value) }} />
                <button onClick={handleIncrementAmout} >Increment By Amount</button>
                <button onClick={handleDecrementAmout} >Decrement By Amount</button>
            </div>
        </div>
    )
}

export default Counter