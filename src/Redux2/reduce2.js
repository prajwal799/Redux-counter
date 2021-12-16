import { DIVIDE_COUNTER, MULTIPLY_COUNTER, SUBTRACT_COUNTER, SUM_COUNTER } from "../Redux/actionType"
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from "./actionType2"
const initiState = {
    counter : 1
}
function reduce2( state =initiState , {type,payload}) {
    payload = parseInt(payload)
    switch(type){
        case INCREMENT_COUNTER :
             return {
            ...state,
           counter: state.counter + payload 
      }
      case DECREMENT_COUNTER:
        return{
               ...state,
       counter : state.counter - payload
        }
        case SUM_COUNTER:
        return{
               ...state,
       counter : state.counter + payload
        }
        case SUBTRACT_COUNTER:
        return{
               ...state,
       counter : state.counter - payload
        }
        case DIVIDE_COUNTER:
        return{
               ...state,
       counter : Math.ceil(state.counter / payload)
        }
        case MULTIPLY_COUNTER:
        return{
               ...state,
       counter : state.counter * payload
        }

        default :
        return state
    }
}
export default reduce2;