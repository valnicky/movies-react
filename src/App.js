import Form from './components/Form';
import './App.css';

const movies = [{
  name: 'Avengers',
  available: 5,
},
{
  name: 'Terminator',
  available: 3,
}];


export default function App() {
    return ( <div className = "App" >
        <h1 > Movies </h1> 
        {movies.map(
          (movie) => 
          (<Form {...movie}/>)
        )}
        </div>
    );
}

 