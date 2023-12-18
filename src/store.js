import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import asyncActionMiddleware from "./middlewares/asyncActionMiddleware";
import uiSlice from "./slices/uiSlice";


const setupStore = () =>
    configureStore({
        reducer: {

            auth: authSlice.reducer,
            ui: uiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(asyncActionMiddleware),
    });

export default setupStore;
