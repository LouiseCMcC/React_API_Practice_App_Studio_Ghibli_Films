import React, { useState, useEffect } from 'react';
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetail';
import FilmSelector from '../components/FilmSelect';


const FilmBox = () => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
      getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    // const onMunroClick = function (munro) {
    //     setSelectedMunro(munro);
    // }

    const onFilmSelected = function(film){
        setSelectedFilm(film);
    }

    return (
        <div className="main-container">
            <FilmSelector films={films} onFilmSelected={onFilmSelected}/>
            {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/>:null}
        </div>
    )
}

export default FilmBox;


