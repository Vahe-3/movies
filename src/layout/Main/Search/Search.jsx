import React from 'react';
import style from "./Search.module.css";
import { useState, useEffect } from 'react';
import serachIcon from "../../../CommonFiles/icons/search-icon.svg"
import { useDispatch } from 'react-redux';
import { getMoviesThunk } from './../../../Store/foundMoviesSlice';




const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [contentType, setContentType] = useState("all");
    const dispatch = useDispatch();

    useEffect(() => {

       
        if (searchText) {
            dispatch(getMoviesThunk({ searchText, contentType }));

        }

    }, [contentType])


    const handleText = (e) => {

        setSearchText(e.target.value);

    }

    const getMovies = (e) => {
        
        if (e.key === "Enter" && searchText || e.type === "click") {
            
            dispatch(getMoviesThunk({ searchText, contentType }))
        }

    }



    const handleFilter = (e) => {

        setContentType(e.target.dataset.type);

    }


    return (
        <>
            <div className={style.search}>

                <input type="text" placeholder='Search movie' value={searchText} onKeyDown={(e) => getMovies(e)} onChange={handleText} />
                {searchText ? <a className="waves-effect waves-light btn-large " onClick={(e) => getMovies(e) } >
                    <img width={20} src={serachIcon} />
                </a> : null}

            </div>

            <div className={style.search__filter}>
                <div>
                    <label>
                        <input className="with-gap"
                            name="movies-filter"
                            type="radio"
                            data-type="all"
                            onChange={handleFilter}
                            checked={contentType === "all" ? true : false} />

                        <span>All</span>

                    </label>
                </div>
                <div>
                    <label>
                        <input className="with-gap"
                            name="movies-filter"
                            type="radio"
                            data-type="movie"
                            onChange={handleFilter}
                            checked={contentType === "movie" ? true : false} />

                        <span>Movies</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input className="with-gap"
                            name="movies-filter"
                            type="radio"
                            data-type="series"
                            onChange={handleFilter}
                            checked={contentType === "series" ? true : false} />

                        <span>Series</span>
                    </label>
                </div>


            </div>

        </>
    )
}














export default Search