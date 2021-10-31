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
    }
];


export default function App() {
    return ( <React.Fragment>
        <h1 > Movies </h1>  {
        movies.map(
            (movie) =>
            ( < Form movie = { movie }/>)
            )
        }

        <TodoCounter />
        <TodoSearch />
        <TodoList >
        {movies.map((movie) => (
          <TodoItem key={movie.name}  name = {movie.name}/>
        ))}
        </TodoList> 
        <CreateTodoButton/>
      </React.Fragment>
    );
}