import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  // const [num, setNum] = useState(0);
  // const increase = () => {
  //   setNum(num+1)
  // }
  // const decrease = () => {
  //   setNum(num-1)
  // }
  return (
    <div className='app'>
      <h1 className='title'>TODO list</h1>
      <TodoList />


      {/* <button onClick={decrease}>-</button>
      <h1>{num}</h1>
      <button onClick={increase}>+</button> */}
    </div>
  );
}

export default App;

