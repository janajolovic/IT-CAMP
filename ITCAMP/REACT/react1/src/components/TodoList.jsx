import React, { useState } from 'react'
import Todo from './Todo'

const TodoList = () => {
    const [tasks, setTasks] = useState(['first task', 'second task', 'third task']);
    const deleteTodo = (e) => {
        const todo_text = e.target.value;
        setTasks(tasks.filter(t => t!==todo_text))
    }
    const removeLast = () => {
        setTasks(tasks.filter((t, i) => i !== tasks.length - 1))
    }

    return (
        <div className='todo-list'>
            {tasks.map((t, i) => {
                return <Todo text={t} deleteTodo={deleteTodo}/>
            })}
        <button onClick={removeLast}>Remove last task</button>
        </div>
    )
}

export default TodoList
