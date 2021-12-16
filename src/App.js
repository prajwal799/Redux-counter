import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { useContext, useState } from 'react';
import { AppContext } from './Redux/AppContextApi';

function App() {
  const {getState} = useContext(AppContext);
  const {counter} = getState();
  return (
    <div className="App">
      <Counter />
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
