import React from 'react'

const Todo = ({text}) => {
    return (
        <div className='todo-item'>
            <h1>{text}</h1>
        </div>
    )
}

export default Todo
