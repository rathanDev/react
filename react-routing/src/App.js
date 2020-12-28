import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>

      <div className="App">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/about">About</NavLink>
        <NavLink activeClassName="active" to="/about/1">About 1</NavLink>
        <NavLink activeClassName="active" to="/about/2">About 2</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/:id?" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>

      </div>


    </Router>
  );
}

export default App;
