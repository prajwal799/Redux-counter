import { TODO_ADD } from "./actionType3"

const initState = {
    todos:[
        {
            id:1,
            status:false,
            title:"Learn React"
        }
    ]
}
const reduce3 = ( state = initState , {type,payload}) => {
   switch(type){
        case TODO_ADD:
            return{
                ...state,
               todos: [...state.todos,payload]
            }
        
       default :
       return state
   }
}
export  {reduce3}