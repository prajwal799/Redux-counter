import React, { useContext }  from "react"
import { addCounter, reduceCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextApi";
import { store } from "../Redux/store";
const Counter = () => {
   
  const {dispatch,getState} = useContext(AppContext);
  const {counter} = getState();
    
    const handleAdd = () => {
        dispatch(addCounter(1));
        
    }

    const handleReduce = () => {
        dispatch(reduceCounter(1));
        
    }
    return(
        <>
         <h3>Counter {counter}</h3>
         <button onClick={handleAdd}>Increment</button>
         <button onClick={handleReduce}>Decrement</button>
        </>
    )
}
export default Counter