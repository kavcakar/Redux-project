//  const initialState = {
//    counter: 0, //? Global state
// }

// // //? Pure js function
// // //? Bir dis bagimlilik olmamali
//  const reducer = (state = initialState, action) => {
//    switch (action.type) {
//      case "INCREASE":
//        return { counter: state.counter + 1 }
//      case "DECREASE":
//        return { counter: state.counter - 1 }
//      case "RESET":
//        return { counter: 0 }
//      default:
//        return state
//    }
//  }
 

// export default reducer

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
})

const store = createStore(rootReducer)