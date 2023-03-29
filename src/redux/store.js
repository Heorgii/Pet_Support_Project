import { configureStore } from '@reduxjs/toolkit';
import { querySlice } from './query/slice';
import { paginationSlice } from './pagination/slice';
import { breedsSlice } from './breeds/slice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/slice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    query: querySlice.reducer,
    modal: modalReducer,
    breeds: breedsSlice.reducer,
    pagination: paginationSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
