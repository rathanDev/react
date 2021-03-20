import React, { useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2
        },
        {
            name: 'Inception',
            price: '$10',
            id: 3
        }
    ]);

    return (
        <div>
            {
                movies.map(movie => (
                    <li>{movie.name}</li>)
                )
            }
        </div>
    );

}

export default MovieList;
