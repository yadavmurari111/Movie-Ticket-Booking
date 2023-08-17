import {nowPlayingMovies, popularMovies, upcomingMovies} from './api';

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
