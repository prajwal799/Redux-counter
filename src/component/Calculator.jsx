import { useContext, useState } from "react";
import {incrementcounter, decrementcounter, sumcounter, subtractcounter, dividecounter, multiplycounter } from "../Redux2/action2";
import { AppCalculator } from "../Redux2/AppContextCalculator";
import "./module.css"
const Calculator = () => {
    const {dispatch,getState} = useContext(AppCalculator);
    const {counter} = getState();
    const [values , setValue] = useState(0);

    const handleIncrement = () => {
      dispatch(incrementcounter(1));
    }
    const handleDecrement = () => {
        dispatch(decrementcounter(1));
    }
    const handleSum = () => {
        dispatch(sumcounter(values));
    }

    const handleSubtract = () => {
        dispatch(subtractcounter(values));
    }
    const handleDivide = () => {
        dispatch(dividecounter(values));
    }
    const handleMultiply = () => {
        dispatch(multiplycounter(values));
    }
    return(
        <div className="calculator_box">
            <h1>Small Calculator</h1>
            <h1 className="value">{counter}</h1>
            <button onClick={handleIncrement} className="calculator_btn_incre">Increment</button>
            <button onClick={handleDecrement} className="calculator_btn_incre">Decrement</button><br />
            <div style={{dispaly:"flex"}}>
           <div style={{dispaly:"flex"}}>
           <input placeholder="X" className="calculator_btn" type="number" onChange={(e) => setValue(e.target.value)} />
           </div>
           <div>
            <button onClick={handleSum} className="calculator_btn">Add</button>
            <button onClick={handleMultiply} className="calculator_btn">multiply</button>
            <div>
                <button onClick={handleSubtract} className="calculator_btn">Subtract</button>
                <button onClick={handleDivide} className="calculator_btn">divide</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Calculator;