import * as types from './userTypes';
import { loginUser } from '../../api/methods/user';

// User Authentication Action
export const login = (username: string, password: string) => {
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