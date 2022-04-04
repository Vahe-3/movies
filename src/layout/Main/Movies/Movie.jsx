import React from 'react';
import style from "./Movie.module.css";

const Movie = ({ title, year, type, poster }) => {

    return (
        <div className={style.movies}  >
            <div className="card ">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={poster} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {title}
                        <i className="material-icons right">{type}</i>
                    </span>
                    <p>{year}</p>
                </div>

            </div>

        </div>
    )

}

export default Movie