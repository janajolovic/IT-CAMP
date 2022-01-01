import React from 'react'

const Input = ({inputHandler, addTodo, input}) => {
    
    return (
        <div className='input-div'>
            <input className='input' type="text" value={input} onChange={inputHandler}></input>
            <button className='btn' onClick={addTodo}> + </button>
        </div>
    )
}

export default Input