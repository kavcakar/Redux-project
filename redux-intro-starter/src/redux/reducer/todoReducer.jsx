import { ADD_TODO } from "../types/todoTypes"

 const initialState = {
    todolist: [{id:1, text:"", completed:false}],
 }
 
const todoReducer = (state = initialState, { type, payload }) => {
   switch (type) {
     case ADD_TODO:
       return {
        todolist: [...state.todolist, {id: new Date(), text: payload, completed: false}]
       }
    default:
 
 
     return state
   }
 }
 
 export default todoReducer