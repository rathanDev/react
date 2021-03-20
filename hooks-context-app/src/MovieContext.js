import React, { useState, createContext } from 'react'

const MovieContext = createContext();

const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Game of thrones',
            price: '$10'
        },
        {
            id: 2,
            name: 'GreenLand',
            price: '$20'
        },
        {
            id: 3,
            name: 'KnightRider',
            price: '$30'
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )

}

export { MovieContext, MovieProvider }