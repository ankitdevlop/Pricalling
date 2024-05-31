/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Pages/Authentication/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
