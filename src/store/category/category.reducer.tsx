import * as types from './category.types';

// Initial State
const INITIAL_STATE: types.CategoryState = {
  categories: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;