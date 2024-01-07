import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const financingAction = createAsyncThunk(
  "invoice/addInvoice",
  RequestHelper
);
export const selectFinancingAction = createAsyncThunk(
  "invoice/selectInvoice",
  RequestHelper
);

const financingSlice = createSlice({
  name: "financing",
  initialState: {
    financings: [],
    selectedFinancing: null,
},
  extraReducers: (builder) => {
    builder.addCase(financingAction.fulfilled, (state, { payload }) => {
        if (payload) {
        state.financings = payload.data;
      }
    });
    builder.addCase(selectFinancingAction.fulfilled, (state, { payload }) => {
      if (payload) {
        state.selectedFinancing = payload;
      }
    });
  },
});

export default financingSlice;