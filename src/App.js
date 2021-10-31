import Form from './components/Form';
import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';


const movies = [{
        name: 'Avengers',
        available: 5,
    },
    {
        name: 'Terminator',
        available: 3,
    }
];


export default function App() {
    return ( < div className = "App" >
        <h1 > Movies </h1>  {
        movies.map(
            (movie) =>
            ( < Form movie = { movie }/>)
            )
        }

        <TodoCounter />
        < TodoSearch />
        < TodoList >
        <TodoItem />
        </TodoList> </div >
    );
}