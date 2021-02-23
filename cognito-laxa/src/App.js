import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Login from './components/login/login';

import './App.css';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {

  state = {
    loggedIn: false
  }

  render() {
    console.log('AppJs render loggedIn:', this.state.loggedIn);

    if (!this.state.loggedIn) {
      return (
        <div>
          <Router>
            <Navbar loggedIn={this.state.loggedIn} loggedOut={this.checkLoggedOut}></Navbar>
            <Switch>
              <Route exact path="/login">
                <Login loggedIn={this.checkLoggedIn} />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <Router>
            <Navbar loggedIn={this.state.loggedIn} loggedOut={this.checkLoggedOut} />
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      );
    }
  }

  checkLoggedIn = (loggedIn) => {
    console.log('checkLoggedIn', loggedIn);
    if (loggedIn) {               // loggedIn
      this.setState({
        loggedIn: true
      });
    } else {                      // loggedOut
      this.setState({
        loggedIn: false
      });
    }
  }

  checkLoggedOut = (loggedOut) => {
    console.log('checkLoggedOut ', loggedOut);
    if (loggedOut) {
      this.setState({
        loggedIn: false
      });
    }
  }

}

export default App;


