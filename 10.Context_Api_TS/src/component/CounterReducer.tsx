
// defining interface type
export type State = { count: number };
export type Action = { type: 'increament' } | { type: 'decreament' }

export const CountReducer = ( state: State, action: Action )=> {
    switch (action.type) {
        case 'increament':
            return { count: state.count + 1 }
        case 'decreament':
            return { count: state.count - 1 }
        default:
            return state;
    }
}
