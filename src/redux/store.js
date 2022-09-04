import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contactsSlice';
import { authSlice } from './auth/authSlice';
import { contactApi } from './api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    contacts: phoneBookSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
