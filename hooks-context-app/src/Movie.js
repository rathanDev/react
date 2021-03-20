import React from 'react'

const Movie = ({ id, name, price }) => {
    return (
        <div>
            <div key={id}>
                <li>{name}</li>
                <li>{price}</li>
                <br />
            </div>
        </div>
    )
}

export default Movie