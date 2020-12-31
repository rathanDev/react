import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Preference from './components/preference';
import Login from './components/login';

function App() {
  return (
    <div className='wrapper'>
      <h1>App</h1>

      <Login/>

      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preference'>
            <Preference />  
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
