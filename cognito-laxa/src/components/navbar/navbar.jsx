import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import history from './../history';

import './navbar.scss';

class Navbar extends Component {

    constructor() {
        super();
        this.state = {};
        this.logout = this.logout.bind(this);
    }

    render() {
        const loggedIn = this.props.loggedIn;

        return (
            <div id="top-nav-container" className="py-2">

                <div className="container-fluid">

                    {/* <Router> */}
                        <div className="row align-items-center">

                            <div className="col-12 col-lg-6 text-center text-lg-left">
                                {/* <div className="logo">
                                <a>
                                    AWS Cognito
                                </a>
                            </div> */}
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="main-nav float-lg-right">
                                    <ul className="nav text-center">
                                        <li className="nav-item"><Link to="/">Home</Link></li>
                                        {loggedIn
                                            ? <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
                                            : <span></span>}
                                        {loggedIn
                                            ? <li className="nav-item" onClick={this.logout}><a>Logout</a></li>
                                            : <li className="nav-item"><Link to="/login">Login</Link></li>}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    {/* </Router> */}
                </div>

            </div >
        );

    }

    logout() {
        // console.log('logout');
        this.props.loggedOut(true);
        localStorage.clear();
        history.push('/login');
    }

}

export default Navbar;