import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="#">ContextApi App</a>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <div class="form-inline my-2 my-lg-0">
                        <div class="noOfMovies">No of movies: {movies.length} </div>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Nav