import * as types from './userTypes';
import { loginUser } from '../../api/methods/user';

export const login = (username, password) => {
    return (dispatch) => {
        return loginUser(username, password).then(res => {
            dispatch({
                type: types.SET_USER,
                payload: res
            })
        }).catch(error => {
            if (__DEV__) console.log(error);
        });
    }
};