import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify';
import history from './../history';

import './login.css';

Amplify.configure({
    aws_cognito_region: "us-east-1", // (required) - Region where Amazon Cognito project was created   
    aws_user_pools_id: "us-east-1_VOeC1MLXZ", // (optional) -  Amazon Cognito User Pool ID   
    aws_user_pools_web_client_id: "fujdfaqh521sba9ds8ibm5r7", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
    aws_cognito_identity_pool_id: "us-east-1:f602c14b-0fde-409c-9a7e-0baccbfd87d0", // (optional) - Amazon Cognito Identity Pool ID   
    aws_mandatory_sign_in: "enable" // (optional) - Users are not allowed to get the aws credentials unless they are signed in   
});

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
        this.signIn = this.signIn.bind(this);
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
                                        onClick={this.signIn}
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
        console.log('login', this.username, this.password);
    }

    async signIn() {
        console.log('.............> signIn', this.username, this.password);
        try {
            const user = await Auth.signIn(this.username, this.password);
            console.log('user', user);
            localStorage.setItem('user', user);
            history.push('./dashboard');
            this.props.loggedIn(true);
        } catch (error) {
            console.error('Error signing in', error);
        } finally {
            console.log('Finally block of siginIn');
        }
    }

}

export default Login;
