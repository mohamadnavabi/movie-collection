// Action Types
export const SET_MOVIES = 'SET_MOVIES'
export const SET_CATEGORY_MOVIES = 'SET_CATEGORY_MOVIES'
export const CLEAR_CATEGORY_MOVIES = 'CLEAR_CATEGORY_MOVIES'
export const SET_SEARCH_MOVIE = 'SET_SEARCH_MOVIE'
export const CLEAR_SEARCH_MOVIE = 'CLEAR_SEARCH_MOVIE'

// State Types
export interface MovieState {
  movies: object[],
  categoryMovies: object[],
  searchedMovie: object[]
}