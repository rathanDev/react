import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Preference from './components/preference';
import Login from './components/login';

function App() {

  const token = '';

  if (!token) {
    return <Login/>
  }

  return (
    <div className='wrapper'>
      <h1>App</h1>

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
