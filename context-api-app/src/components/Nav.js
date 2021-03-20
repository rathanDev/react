import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Jana</h3>
            <p>List of movies: {movies.length}</p>
            <hr />
        </div>
    )
}

export default Nav;