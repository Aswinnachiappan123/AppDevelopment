import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage

import userReducer from '../Reducers/userReducers';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

const persistConfig = {
  key: 'root',
  storage,
  // You can add other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
