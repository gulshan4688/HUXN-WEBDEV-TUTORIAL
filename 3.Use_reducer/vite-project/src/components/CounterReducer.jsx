

// so this dispatch funtion can be also made as a component or can be included in any function 
// 1. specify the initial state 
// 2. write the dispatch funtion 

const initialState={count:0}

const CounterReducer=(state,action)=>{
    switch (action.type) {
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "incrementByAmount":
            return {count:state.count+action.payLoad}
        case "decrementByAmount":
            return {count:state.count-action.payLoad}
        default:
        return state;
    }
}

export {CounterReducer,initialState};