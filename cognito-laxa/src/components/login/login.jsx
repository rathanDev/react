import React, { Component } from 'react';

import history from './../history';

import './login.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loading: false
        }
        let username = '';
        let password = '';
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
        this.loggedIn = false;
    }

    render() {
        return (
            <div id="top-container">

                <div id="top-bg"></div>

                <div className="container pb-5 pt-2">

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-4">
                            <div className="shadow p-3 bg-white rounded" id="login-form">

                                <h5> Login </h5>
                                <hr />

                                <div>

                                    <label>Username</label>
                                    <input type="text"
                                        name="username"
                                        className="form-control"
                                        onChange={this.setUsername} />

                                    <label>Password</label>
                                    <input type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={this.setPassword} />

                                    <br />

                                    <button className="btn btn-primary btn-sm btn-block"
                                        onClick={this.login}
                                        disabled={this.state.loading}>
                                        {!this.state.loading ? 'Login' : 'Logging In...'}
                                    </button>

                                    <div className="container errorMessage"></div>

                                    <hr />

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

    componentDidMount() {
        // FOR TESTING
        // this.username = 'jana';
        // this.password = 'jana';
        // this.login();
    }

    setUsername(e) {
        this.username = e.target.value
    }

    setPassword(e) {
        this.password = e.target.value
    }

    login() {
        console.log('login');
        
    }

}

export default Login;
