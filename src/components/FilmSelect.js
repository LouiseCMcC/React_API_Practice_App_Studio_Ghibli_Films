import React from "react";

const FilmSelector = ({films, onFilmSelected}) => {
    const handleChange = function (event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm);
    }
    const filmOptions = films.map ((film, index) => {
        return <option value={index} key={index}>{film.title}</option>
    })
    return (
        <select className="film-dropdown" defaultValue="" onChange={handleChange}>
            <option value="" >Choose a Film!</option>
            {filmOptions}
        </select>
    )
}

export default FilmSelector;