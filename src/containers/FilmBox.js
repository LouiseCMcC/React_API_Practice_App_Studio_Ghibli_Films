import React, { useState, useEffect } from 'react';
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetail';
import FilmSelector from '../components/FilmSelect';
import FilmForm from '../components/FilmForm';


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

    const addFilm = (newFilm) => {
        newFilm.id = Date.now(); //this is unique id for not data persistence data
        const updatedFilms = [...films, newFilm];
        setFilms(updatedFilms);

    };

    return (
        <div className="main-container">
            <FilmSelector films={films} onFilmSelected={onFilmSelected}/>
            {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/>:null}
            <FilmForm onFilmSubmit={addFilm} />
        </div>
    )
}

export default FilmBox;


