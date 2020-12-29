import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div id="top-container">

                <div id="top-bg"></div>

                <div class="container pb-5 pt-2">

                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-4">
                            <div class="shadow p-3 bg-white rounded" id="login-form">

                                <h5> Login </h5>
                                <hr />

                                <form method="post" action="">


                                    <label>Username</label>
                                    <input type="text" name="username"/>

                                    <label>Password</label>
                                    <input type="password" name="password1"/>

                                    <input type="submit" value="Login" className="btn btn-primary btn-sm btn-block" />
                                
                                    <div class="container errorMessage"></div>

                                    <hr />

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default Login;
