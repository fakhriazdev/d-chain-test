import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import asyncActionMiddleware from './middlewares/asyncActionMiddleware';

const setupStore = () =>
  configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(asyncActionMiddleware),
  });

export default setupStore;
