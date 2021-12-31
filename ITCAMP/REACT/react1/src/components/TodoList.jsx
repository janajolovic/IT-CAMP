import React from 'react'
import Todo from './Todo'

const TodoList = () => {
    let tasks = ['first task', 'second task']
    const deleteTodo = (e) => {
        const todo_text = e.target.value;
        tasks = tasks.filter(t => t!==todo_text)
        console.log(tasks)
    }
    return (
        <div className='todo-list'>
            {
                tasks.map((t, i) => {
                    return <Todo text={t} deleteTodo={deleteTodo} />
                })
            }

        </div>
    )
}

export default TodoList
