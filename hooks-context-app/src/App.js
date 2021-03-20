import './App.css'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <br />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App
