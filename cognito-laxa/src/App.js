import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Login from './components/login/login';

import './App.css';

class App extends Component {

  state = {
    loggedIn: false
  }

  render() {

    if (!this.state.loggedIn) {
      return (
        <Router>
          <Navbar loggedIn={this.state.loggedIn} loggedOut={this.checkLoggedOut}></Navbar>
          <Switch>
            <Route path="/login">
              <Login loggedIn={this.checkLoggedIn} />
            </Route>
          </Switch>
        </Router>
      );
    }

    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} loggedOut={this.checkLoggedOut} />
      </div>
    );

  }

  checkLoggedIn = (loggedIn) => {
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
    if (loggedOut) {
      this.setState({
        loggedIn: false
      });
    }
  }

}

export default App;


