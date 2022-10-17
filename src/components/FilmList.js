import React from 'react';
import ListItem from './ListItem';

const FilmList = ({films, onFilmClick}) => {

    const filmsItems = films.map((film, index) => {
      return <ListItem film={film} key={index} onFilmClick={onFilmClick} />
    })

  return (
    <div>
    <ul>
      {filmsItems}
    </ul>
  </div>
  )
}

export default FilmList;


