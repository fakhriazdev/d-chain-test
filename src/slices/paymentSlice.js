import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const paymentAction = createAsyncThunk(
  "invoice/addInvoice",
  RequestHelper
);
export const selectPaymentAction = createAsyncThunk(
  "invoice/selectInvoice",
  RequestHelper
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: [],
    selectedPayment: null,
},
  extraReducers: (builder) => {
    builder.addCase(paymentAction.fulfilled, (state, { payload }) => {
        if (payload) {
        state.payments = payload.data;
      }
    });
    builder.addCase(selectPaymentAction.fulfilled, (state, { payload }) => {
      if (payload) {
        state.selectedPayment = payload;
      }
    });
  },
});

export default paymentSlice;