import React from 'react'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return (
        <div>
            <input className= "TodoSearch" placeholder="text" onChange={onSearchValueChange} value={searchValue}/>
        </div>
    )
}

export default TodoSearch
