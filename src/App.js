import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { useContext, useState } from 'react';
import { AppContext } from './Redux/AppContextApi';
import Calculator from './component/Calculator';
import Todo from './Todo/Todo.jsx';

function App() {
  const {getState} = useContext(AppContext);
  const {counter} = getState();
  return (
    <div className="App">
      <Counter /><br /><br /><br />
      <Todo />
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
