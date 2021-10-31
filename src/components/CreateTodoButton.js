import React from 'react'

function CreateTodoButton() {
    const onClickButton= (msg) => {
        console.log(msg);
    }
    return (
        <div>
            <button className="CreateTodoButton" onClick={onClickButton('message')}>+</button>
        </div>
    )
}

export default CreateTodoButton
