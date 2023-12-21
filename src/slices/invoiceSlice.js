import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const invoiceAction = createAsyncThunk(
  "invoice/addInvoice",
  RequestHelper
);
export const selectInvoiceAction = createAsyncThunk(
  "invoice/selectInvoice",
  RequestHelper
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    selectedInvoices: null,
},
  extraReducers: (builder) => {
    builder.addCase(invoiceAction.fulfilled, (state, { payload }) => {
        if (payload) {
        state.invoices = payload;
      }
    });
    builder.addCase(selectInvoiceAction.fulfilled, (state, { payload }) => {
      if (payload) {
        state.selectedInvoices = payload;
      }
    });
  },
});

export default invoiceSlice;