import React, {useState} from 'react';

const FilmForm = ({onFilmSubmit}) => {

    const [title, setTitle] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSave = title.trim();
        if (!titleToSave)  {
            return
        }

        onFilmSubmit({title: titleToSave});

        setTitle("");

    };

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Film Title" value={title} onChange={handleTitleChange}/>
            <input type="submit" value="Add Comment..." />
        </form>
    )
}

export default FilmForm;