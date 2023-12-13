import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const authAction = createAsyncThunk("auth/login", RequestHelper);
export const forgetAction = createAsyncThunk(
  "auth/forget-password",
  RequestHelper
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(authAction.fulfilled, (state, { payload }) => {
      if (payload.data) {
        state.user = payload.data;
      }
    });
    builder.addCase(forgetAction.fulfilled, (state, { payload }) => {
      state.message = payload;
    });
  },
});

export default authSlice;
