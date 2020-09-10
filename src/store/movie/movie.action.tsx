import * as types from './movie.types';
import { getMovies, getMovieWithCategory, searchMovie } from '../../api/methods/movies';

export const fetchMovies = (token: string) => {
    return (dispatch) => {
        return getMovies(token).then(res => {
            dispatch({
                type: types.SET_MOVIES,
                payload: res
            })
        }).catch(error => {
            if (__DEV__) console.log(error);
        });
    }
};

export const searchMovies = (token: string, searchFor: string) => {
    if (searchFor.length >= 1) {
        return (dispatch) => {
            return searchMovie(token, searchFor).then(res => {
                dispatch({
                    type: types.SET_SEARCH_MOVIE,
                    payload: res
                })
            }).catch(error => {
                if (__DEV__) console.log(error);
            });
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: types.CLEAR_SEARCH_MOVIE,
            })
        }
    }
};

export const fetchMovieWithCategory = (token: string, category: string) => {
    return (dispatch) => {
        return getMovieWithCategory(token, category).then(res => {
            dispatch({
                type: types.SET_CATEGORY_MOVIES,
                payload: res
            })
        }).catch(error => {
            if (__DEV__) console.log(error);
        });
    }
};

export const clearCategoryMovies = () => {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_CATEGORY_MOVIES,
        })
    }
};