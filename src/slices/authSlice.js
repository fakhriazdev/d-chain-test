import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper"

export const authAction = createAsyncThunk('auth/login', RequestHelper);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    extraReducers: (builder) => {
        builder.addCase(authAction.fulfilled, (state, { payload }) => {
            if (payload) {
                state.user = payload;
            }
            console.log(payload);
        });
    }
})


export default authSlice;
