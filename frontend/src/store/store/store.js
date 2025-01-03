
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../reducers/mailReducers';
import  useReducer  from '../reducers/userReducers';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: useReducer,
  },
});
