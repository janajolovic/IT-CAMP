import React, { useState } from 'react'
import Todo from './Todo'
import Input from "./Input"

const TodoList = () => {
    const [tasks, setTasks] = useState(['first task', 'second task', 'third task']);
    const [input, setInput] = useState("");
    const deleteTodo = (e) => {
        const todo_text = e.target.value;
        setTasks(tasks.filter(t => t!==todo_text))
    }
    const removeLast = () => {
        setTasks(tasks.filter((t, i) => i !== tasks.length - 1))
    }

    const inputHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const addTodo = () => {
        setTasks(tasks.concat(input));
        setInput("");
    }

    return (
        <div className='todo-list'>
            <Input inputHandler={inputHandler} addTodo={addTodo} input={input}/>
            {tasks.map(t => {
                return <Todo text={t} deleteTodo={deleteTodo} />
            })}
        <button onClick={removeLast}>Remove last task</button>
        </div>
    )
}

export default TodoList
