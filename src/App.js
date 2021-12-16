import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { useContext, useState } from 'react';
import { AppContext } from './Redux/AppContextApi';
import Calculator from './component/Calculator';

function App() {
  const {getState} = useContext(AppContext);
  const {counter} = getState();
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
