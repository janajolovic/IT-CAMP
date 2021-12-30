import React from 'react'
import Todo from './Todo'

const TodoList = () => {
    const tasks = ['first task', 'second task']
    return (
        <div className='todo-list'>
            {
                tasks.map((t) => {
                    return <Todo text={t} />
                })
            }

        </div>
    )
}

export default TodoList
