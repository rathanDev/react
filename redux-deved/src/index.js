import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

// Store -> Globalized state

// Action -> Increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

let store = createStore(counter);

// Display it on the console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();





