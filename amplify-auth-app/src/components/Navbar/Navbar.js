import React, { useState, useEffect } from 'react'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
    return (

        <div id="top-nav-container" className="py-2">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-12 col-lg-6 text-center text-lg-left">
                        <div className="logo">
                            <a href="xyz.png" alt="Amplify App">Amplify App</a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="main-nav float-lg-right">
                            <ul className="nav text-center">
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/about">About</Link></li>
                                <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
                                <li className="nav-item"><Link to="/"><AmplifySignOut /></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Navbar;