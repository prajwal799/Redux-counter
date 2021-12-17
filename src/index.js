import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/store.js"
import AppContextProvider from './Redux/AppContextApi';
import {store2} from "./Redux2/store2.js"
import AppCalculatorProvider from './Redux2/AppContextCalculator';
import {Provider} from "react-redux"
import { store3 } from './Redux3/store3.js';


ReactDOM.render(
  <React.StrictMode>

    <AppCalculatorProvider store2={store2}>
  <AppContextProvider store={store}>
   <Provider store={store3}>
   <App />
   </Provider>
    </AppContextProvider>
    </AppCalculatorProvider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
