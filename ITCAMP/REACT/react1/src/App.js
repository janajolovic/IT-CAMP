import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import Input from './components/Input';

function App() {
  return (
    <div className='app'>
      <h1>TODO list</h1>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
