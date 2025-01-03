
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../reducers/mailReducers';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
