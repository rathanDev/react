
# --------------------------------------------------- #

https://www.youtube.com/watch?v=CVpUuw9XSjY&t=323s&ab_channel=DevEd

 npm i redux react-redux

# --------------------------------------------------- #

Redux basics

index.js

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





# --------------------------------------------------- #

Redux dev tools

https://github.com/reduxjs/redux-devtools

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


# --------------------------------------------------- #