import React from 'react';

function TodoItem(props) {
{/* const {movie} = props;*/}
const onComplete = () => {
    alert('completamos todo' + props.name);
}

const onDelete = () => {
    alert('deleted ' + props.name);
}

    return (
        <div>
              <li>
                  <span onClick={onComplete}>c</span>
                   <h3> {props.name}</h3>
               <span className={`${props.complete && 'nuevaclasse'}`} onClick = {onDelete}>X</span>
               </li>
        </div>
    );
}

export default TodoItem
