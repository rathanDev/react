import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (

    <div>

      <h1>Hello Redux</h1>

      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>


      {isLogged ? <h6>You are logged in</h6> : <h6>You are NOT logged in</h6>}

    </div>

  );
}

export default App;
