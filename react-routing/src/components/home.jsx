import React, { Component } from 'react';

import Dashboard from './dashboard';

class Home extends Component {

    render() {
        return (
            <div>
                Home

                <div>
                    <h1>Login Here</h1>
                    <button onClick={this.login}>Click to Login</button>
                </div>

            </div>
        )
    }

    login() {
        console.log('login');
        return <Dashboard></Dashboard>
    }


}

export default Home;