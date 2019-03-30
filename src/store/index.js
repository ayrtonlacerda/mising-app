import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import Reactotron from '../config/ReactotronConfig';
import reducers from './ducks';

const  persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { persistor, store};
