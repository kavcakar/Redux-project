
const initialState = {
     counter: 0
}

export const reducer = {state = initialState, action} => {
    switch (action.type) {
        case "INCREASE":
            return {counter:state.counter + 1}
        case "DECREASE":
            return {counter:state.counter - 1}
            case "RESET":
                return {counter:state.counter 0}
    
        default:
            return state
    }
}
