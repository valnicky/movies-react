import React from 'react'

function TodoCounter({total, completed}) {
 
    
    return (
        <div>
            <h2>You've completed {completed} of  {total} TODOs </h2>
        </div>
    )
}

export default TodoCounter
