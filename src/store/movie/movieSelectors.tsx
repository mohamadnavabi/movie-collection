import { createSelector } from 'reselect';

const selectMovie = (state) => state.movie;

// All Movies Selector
export const selectMovies = createSelector(
  [selectMovie],
  movie => movie.movies
)

// Searched Movies Selector
export const selectCategoryMovies = createSelector(
  [selectMovie],
  movie => movie.categoryMovies
)

// Searched Movies Selector
export const selectSearchedMovie = createSelector(
  [selectMovie],
  movie => movie.searchedMovie
)