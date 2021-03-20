import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import AddMovie from './components/AddMovie'
import { MovieProvider } from './components/MovieContext'

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        Context API
      <hr />
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
