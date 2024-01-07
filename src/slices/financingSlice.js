import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const financingAction = createAsyncThunk(
  "financing/addFinancing",
  RequestHelper
);

export const selectFinancingAction = createAsyncThunk(
  "financing/selectFinancing",
  RequestHelper
);

const financingSlice = createSlice({
  name: "financing",
  initialState: {
    financing: [],
    selectedFinancing: null,
  },
  extraReducers: (builder) => {
    builder.addCase(financingAction.fulfilled, (state, { payload }) => {
      console.log(payload);
      if (payload) {
        state.financing = payload;
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
