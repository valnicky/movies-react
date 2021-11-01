import Form from './components/Form';
import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';
import React from 'react';

const movies = [{
        name: 'Avengers',
        available: 5,
        completed: false
    },
    {
        name: 'Terminator',
        available: 3,
         completed: false
    },
    {
      name: 'Casablanca',
      available: 4,
      completed: false
    },
    {
      name: 'Rambo',
      available: 2,
      completed: true
    }
];

function useLocalStorage(itemName, initialValue){
  //  const [movies, setMovies ] = React.useState(parsedMovies);
    const localStorageItem = localStorage.getItem('itemName');
   let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }
  return [
    item,
    saveItem,
  ]
}


export default function App() {
  const [movies, saveMovies] = useLocalStorage('MOVIES_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedMovies = movies.filter((movie) =>  !!movie.completed).length;
  const totalMovies = movies.length;
  let searchedMovies = [];
  
  if(!searchValue.length >= 1){
    searchedMovies = movies;
  } else {
    searchedMovies = movies.filter( movie => {
      const movieText = movie.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return movieText.includes(searchText);
    })
  }
  

  
  const completeMovie = (name) => {
    const movieIndex = movies.findIndex(movie => {
      movie.name === name;
    });
    const newMovies = [...movies];
    newMovies[movieIndex].completed = true;
    saveMovies(newMovies);
   // movies[movieIndex] = {
 //     name: movies[movieIndex].name,
   //   completed: true
//    }
setMovies(newMovies);
  }
  
  const deleteMovie = (name) => {
    const movieIndex = movies.findIndex(movie => movie.name === name);
    const newMovies = [...movies];
    newMovies.splice(movieIndex, 1);
    setMovies(newMovies);
  }
  
  React.useEffect(() => {
    console.log('use effect');
  }, [totalMovies]);
  
    return ( <React.Fragment>
        <h1 > Movies </h1>  {
        movies.map(
            (movie) =>
            ( < Form movie = { movie }/>)
            )
        }

        <TodoCounter total={totalMovies} completed={completedMovies} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList >
          {error && <p>Hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          
        {searchedMovies.map((movie) => (
          <TodoItem key={movie.name} 
           name = {movie.name} 
           completed={movie.completed}
            onComplete = {() => completeMovie(movie.name)}
            onDelete = {() => deleteMovie(movie.name)}
            />
        ))}
        </TodoList> 
        <CreateTodoButton/>
      </React.Fragment>
    );
}