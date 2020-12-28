import React, { Component } from 'react';

class TopNav extends Component {

    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <a class="navbar-brand" href="{% url 'home' %}">
                        <span class="navbar-brand"> &nbsp; Brand</span>
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div class="my-0 ml-auto">
                            <span class="mx-2 navbar-text">Hello User</span>
                            <span><a class="btn btn-sm btn-secondary mx-2" href="{% url 'dashboard' %}">Dashboard</a></span>
                            <span><a class="btn btn-sm btn-secondary mx-2" href="{% url 'logout' %}">Logout</a></span>
                            <span> <a class="btn btn-sm btn-secondary mx-2" href="{% url 'login' %}">Login</a></span>
                        </div>
                    </div>

                </nav>

            </div>
        )
    }
}

export default TopNav;
