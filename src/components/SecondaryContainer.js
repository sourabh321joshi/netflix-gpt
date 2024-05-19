import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) =>store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-96 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Action"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Romantic"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
);
};

export default SecondaryContainer
