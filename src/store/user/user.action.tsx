import * as types from './user.types';
import { loginUser } from '../../api/methods/user';
import notify from '../../utils/notify';

// User Authentication Action
export const login = (username: string, password: string) => {
    return (dispatch) => {
        return loginUser(username, password).then(res => {
            if (res.hasOwnProperty('non_field_errors')) {
                res.non_field_errors.map(x => notify(x))
            }

            dispatch({
                type: types.SET_USER,
                payload: res
            })
        }).catch(error => {
            if (__DEV__) console.log(error);
        });
    }
};