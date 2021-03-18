import React, { useState, useEffect } from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )

  // return (
  //   <Router>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/dashboard">Dashboard</Link>
  //         </li>
  //       </ul>

  //       <hr />
  //       <Switch>
  //         <Route exact path="/">
  //           <Home />
  //         </Route>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/dashboard">
  //           <Dashboard />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // )

  // return (
  //   <div className="App">
  //     Amplify Auth App
  //     <AmplifySignOut />
  //     <hr />
  //     <input type='file' onChange={(e) => handleChange(e)} />
  //     <br />
  //     <button onClick={saveFile}>Save File</button>
  //     <br />
  //     <h3>File</h3>
  //     <img src={fileUrl} />
  //   </div>
  // )


}

export default App;
// export default withAuthenticator(App, { includeGreetings: true });
