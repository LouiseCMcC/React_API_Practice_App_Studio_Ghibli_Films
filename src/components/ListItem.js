import React from 'react';

const ListItem = ({film, onFilmClick}) => {

  const handleClick = function() {
    onFilmClick(film);
  }
  return <li onClick= {handleClick}>{film.title}</li>
}

export default ListItem;




