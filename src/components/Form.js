import React from 'react';

export default function Form(props) {
    const [ quantity,  setQuantity ] = React.useState(0);
    const { movie } = props;
    
    return (
        <form>
            <h2>{movie.name}</h2>
            <button type="button" onClick={
                () => { setQuantity(quantity - 1)}
            }>-</button>
          {quantity}
            <button type="button" onClick={() => {
              setQuantity(quantity+1)
          }}>+</button>
          </form>
    );
}