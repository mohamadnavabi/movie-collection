import * as types from './category.types';
import { getCategories } from '../../api/methods/categories';

// Get All Categories Action
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