import React, { Component } from 'react';
import Dashboard from './dashboard';
import { useHistory } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                Home

                <div>
                    <h1>Login Here</h1>
                    <button onClick={() => this.login()}>Click to Login</button>
                </div>

            </div>
        )
    }

    login() {
        console.log('login to db');
        this.props.history.push('/dashboard');
    }


}

export default Home;