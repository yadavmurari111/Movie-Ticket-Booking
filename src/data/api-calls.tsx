import {
  movieCastDetails,
  movieDetails,
  nowPlayingMovies,
  popularMovies,
  searchMovies,
  upcomingMovies,
} from './api';

export const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    return await response.json();
  } catch (error) {
    console.error(
      ' Something went wrong in getNowPlayingMoviesList Function',
      error,
    );
  }
};

export const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    return await response.json();
  } catch (error) {
    console.error(
      ' Something went wrong in getUpcomingMoviesList Function',
      error,
    );
  }
};

export const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    return await response.json();
  } catch (error) {
    console.error(
      ' Something went wrong in getPopularMoviesList Function',
      error,
    );
  }
};

export const getSearchedMoviesList = async (keyword: string) => {
  try {
    let response = await fetch(searchMovies(keyword));
    return await response.json();
  } catch (error) {
    console.error(
      ' Something went wrong in getSearchedMoviesList Function',
      error,
    );
  }
};

export const getMovieData = async (movieId: number) => {
  try {
    let response = await fetch(movieDetails(movieId));
    return await response.json();
  } catch (error) {
    console.error(' Something went wrong in getMovieData Function', error);
  }
};

export const getMovieCasteData = async (movieId: number) => {
  try {
    let response = await fetch(movieCastDetails(movieId));
    return await response.json();
  } catch (error) {
    console.error(' Something went wrong in getMovieCasteData Function', error);
  }
};
