import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                Login

                <form>

                    <label>Username</label>
                    <input type="text" />

                    <br />

                    <label>Password</label>
                    <input type="text" />

                    <br/>

                    <button type="submit">Submit</button>

                </form>

            </div>
        )
    }

}

export default Login;