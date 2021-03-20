import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {

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
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price} />
            ))}
        </div>
    )
}

export default MovieList