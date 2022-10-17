import React, {useState} from 'react';

const FilmForm = ({onFilmSubmit}) => {

    const [title, setTitle] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [running_time, setRunningTime] = useState("");
    const [director, setDirector] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };
    const handleReleaseDateChange = (event) => {
        setReleaseDate(event.target.value)
    };
    const handleRunningTimeChange = (event) => {
        setRunningTime(event.target.value)
    };
    const handleDirectorChange = (event) => {
        setDirector(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const titleToSave = title.trim();
        const releaseDateToSave = release_date.trim();
        const runningTimeToSave = running_time.trim();
        const directorToSave = director.trim();
        if (!titleToSave || !releaseDateToSave || !runningTimeToSave || !directorToSave)  {
            return
        }

        onFilmSubmit({title: titleToSave, release_date: releaseDateToSave, running_time: runningTimeToSave, director: directorToSave});

        setTitle("");
        setReleaseDate("");
        setRunningTime("");
        setDirector("");

    };

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Film Title" value={title} onChange={handleTitleChange}/>
            <input type="text" placeholder="Release Date" value={release_date} onChange={handleReleaseDateChange}/>
            <input type="text" placeholder="Running Time" value={running_time} onChange={handleRunningTimeChange}/>
            <input type="text" placeholder="Director" value={director} onChange={handleDirectorChange}/>
            <input type="submit" value="Add Comment..." />
        </form>
    )
}

export default FilmForm;

