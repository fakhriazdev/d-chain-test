import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import asyncActionMiddleware from "./middlewares/asyncActionMiddleware";
import uiSlice from "./slices/uiSlice";
import companySlice from "./slices/companySlice";
import invoiceSlice from "./slices/invoiceSlice";
import paymentSlice from "./slices/paymentSlice";
import financingSlice from "./slices/financingSlice";

const setupStore = () =>
  configureStore({
    reducer: {
      auth: authSlice.reducer,
      companies: companySlice.reducer,
      ui: uiSlice.reducer,
      invoice: invoiceSlice.reducer,
      payment: paymentSlice.reducer,
      financing: financingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(asyncActionMiddleware),
  });

export default setupStore;
