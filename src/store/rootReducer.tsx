import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

// Reducers
import userReducer from './user/userReducer';
import movieReducer from './movie/movieReducer';
import categoryReducer from './category/categoryReducer';

// Set Persist Configs
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);