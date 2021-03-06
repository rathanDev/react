import './App.css';

import Login from "./components/login";
import TopNav from "./components/topNav";

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Home from './components/home';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
      <script src="https://cdn.plot.ly/plotly-latest.min.js" />

      <TopNav />
      <Login />

      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossOrigin="anonymous"></script>

    </div>
  );
}

export default App;
