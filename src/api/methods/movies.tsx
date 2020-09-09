import Api from '../index';
import Constants from '../Constants';

// Get All Movies
const getMovies = (token: string) => {
  return Api(Constants.MOVIE, null, 'get', token);
}

// search Movie with Name
const searchMovie = (token: string, searchFor: string) => {
  return Api(`${Constants.MOVIE}?search=${searchFor}`, null, 'get', token);
}

// Get Movie With Category
const getMovieWithCategory = (token: string, category: string) => {
  return Api(`${Constants.MOVIE}?tags=${category}`, null, 'get', token);
}

export { getMovies, searchMovie, getMovieWithCategory };