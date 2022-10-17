import React from "react";
import FilmBox from "../containers/FilmBox";

const FilmDetail = ({selectedFilm}) => {
    return(
        <>
        <div>
            <h3>{selectedFilm.title}</h3>
            </div>
        </>
    )
};

export default FilmDetail;