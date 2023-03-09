import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducer/index';


const persistConfig = {
    key: 'root',
    storage: storage
  };

  export const persistedReducer = persistReducer(persistConfig, rootReducer);