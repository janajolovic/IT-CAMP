import React from 'react'

const Input = () => {
    const addFunc = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='input-div'>
            <input className='input' type="text" onChange={addFunc}></input>
            <button className='btn'> + </button>
        </div>
    )
}

export default Input