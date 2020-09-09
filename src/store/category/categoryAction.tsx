import * as types from './categoryTypes';
import { getCategories } from '../../api/methods/categories';

export const fetchCategories = (token: string) => {
    return (dispatch) => {
        return getCategories(token).then(res => {
            dispatch({
                type: types.SET_CATEGORIES,
                payload: res
            })
        }).catch(error => {
            if (__DEV__) console.log(error);
        });
    }
};