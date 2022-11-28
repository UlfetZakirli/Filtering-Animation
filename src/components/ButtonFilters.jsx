import React, { useContext, useState } from 'react'
import { MovieContext } from '../App'
import { genres } from '../untils'

const ButtonFilters = () => {
    const [tabActive, setTabActive] = useState(0)
    const { popularMovies, setFilteredMovie } = useContext(MovieContext)
    const handleClickFilter = (id) => {
        setTabActive(id);
        const filteredMovie = popularMovies.filter((movie) => movie.genre_ids.includes(id))
        console.log(filteredMovie);
        if (id === 0) {
            setFilteredMovie(popularMovies)
        } else {
            setFilteredMovie(filteredMovie)
        }
    }

    return (
        <div className='button-wrapper'>
            {genres.map((genre) => (
                <button
                    onClick={() => handleClickFilter(genre.id)}
                    key={genre.id}
                    className={tabActive === genre.id ? 'active' : undefined}
                >{genre.name}</button>
            ))}
        </div>
    )
}

export default ButtonFilters