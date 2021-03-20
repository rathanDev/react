import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav'
import { MovieProvider } from './components/MovieContext'

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        Context API
      <hr />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
