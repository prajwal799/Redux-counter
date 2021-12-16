import { createContext, useState } from "react";
import { createStore } from "redux";
import { store2 } from "./store2";

export const AppCalculator = createContext();

const  AppCalculatorProvider = ({children}) => {
    const {dispatch , getState} = store2;
    const value = {dispatch,getState};
    const [state,setState] = useState(0);
    const formUpdate = () => setState((prev) => prev+1);

    store2.subscribe(formUpdate)

    return(
       <AppCalculator.Provider value={value}>{children}</AppCalculator.Provider>
    )
}
export default AppCalculatorProvider;