import * as types from './user.types';

// Initial State
const INITIAL_STATE: types.UserState = {
  auth: {}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        auth: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;