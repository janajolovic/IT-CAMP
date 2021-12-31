import React from 'react'

const Todo = ({text}) => {
    return (
        <div className='todo-item'>
            <h1>{text}</h1>
            <button className='delete-btn'><i class="fas fa-times"></i></button>
        </div>
    )
}

export default Todo
