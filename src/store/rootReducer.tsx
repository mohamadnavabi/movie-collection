import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

// Reducers
import userReducer from './user/user.reducer';
import movieReducer from './movie/movie.reducer';
import categoryReducer from './category/category.reducer';

// Set Persist Configs
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);