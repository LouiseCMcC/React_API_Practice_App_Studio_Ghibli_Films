import React from "react";
import FilmBox from "../containers/FilmBox";

const FilmDetail = ({selectedFilm}) => {
    return(
        <>
        <div>
            <h3>{selectedFilm.title}</h3>
            <p>Release Date: {selectedFilm.release_date}</p>
            <p>Running Time: {selectedFilm.running_time}</p>
            <p>Director: {selectedFilm.director}</p>
            </div>
        </>
    )
};

export default FilmDetail;