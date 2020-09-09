import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

// Create middlewares for redux
const middlewares = [thunk];

// Create redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persistStore
const persistor = persistStore(store);

export { store, persistor };