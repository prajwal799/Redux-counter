import { DIVIDE_COUNTER, MULTIPLY_COUNTER, SUBTRACT_COUNTER, SUM_COUNTER } from "../Redux/actionType"
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionType2"
const incrementcounter = (payload) => {
    return{
        type:INCREMENT_COUNTER,
        payload
    }
}
const decrementcounter = (payload) => {
    return{
        type:DECREMENT_COUNTER,
        payload
    }
}

const sumcounter = (payload) => {
    return{
        type:SUM_COUNTER,
        payload
    }
}
const subtractcounter = (payload) => {
    return{
        type:SUBTRACT_COUNTER,
        payload
    }
}
const dividecounter = (payload) => {
    return{
        type:DIVIDE_COUNTER,
        payload
    }
}
const multiplycounter = (payload) =>{
    return{
        type:MULTIPLY_COUNTER,
        payload
    }
}
export {incrementcounter,decrementcounter,sumcounter,multiplycounter,dividecounter,subtractcounter};