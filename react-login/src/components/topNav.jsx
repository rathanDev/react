import React, { Component } from 'react';

class TopNav extends Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <a className="navbar-brand" href="{% url 'home' %}">
                        <span className="navbar-brand"> &nbsp; Brand</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="my-0 ml-auto">
                            <span className="mx-2 navbar-text">Hello User</span>
                            <span><a className="btn btn-sm btn-secondary mx-2" href="{% url 'dashboard' %}">Dashboard</a></span>
                            <span><a className="btn btn-sm btn-secondary mx-2" href="{% url 'logout' %}">Logout</a></span>
                            <span> <a className="btn btn-sm btn-secondary mx-2" href="{% url 'login' %}">Login</a></span>
                        </div>
                    </div>

                </nav>

            </div>
        )
    }
}

export default TopNav;
