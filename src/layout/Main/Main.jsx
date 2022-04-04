import React, { useState } from 'react';
import Search from './Search/Search';
import Movie from './Movies/Movie';
import style from "./Main.module.css";
import { useSelector } from 'react-redux';



const Main = () => {

  const { movies } = useSelector(state => state.movies);

  const moviesElements = movies?.map(movie => <Movie key={movie.imdbID}
                                                     title={movie.Title}
                                                     year={movie.Year}
                                                     type={movie.Type}
                                                     poster={movie.Poster} />)
    



  return (
    <div className={style.main}>

      <Search />
      <div className={style.main__movies}>

        {
          !movies ? <h4 className='main-error' >There is no movie by that name</h4> : moviesElements
        }

      </div>

    </div>
  )
}

export default Main;







