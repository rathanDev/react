import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1
        },
        {
            name: 'Game of Thrones',
            price: '$20',
            id: 2
        },
        {
            name: 'Inception',
            price: '$30',
            id: 3
        }
    ]);

    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} name={movie.name} price={movie.price} />)
            }
        </div>
    );

}

export default MovieList;
