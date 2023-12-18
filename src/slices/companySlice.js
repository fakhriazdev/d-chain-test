import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RequestHelper from '../services/RequestHelper';

export const companyAction = createAsyncThunk('company/addCompany', RequestHelper);
export const selectCompanyAction = createAsyncThunk('company/selectCompany', RequestHelper);
export const downloadFile = createAsyncThunk('company/downloadFile', RequestHelper);

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companies: [],
        selectedCompany: null,
    },
    extraReducers: (builder) => {
        builder.addCase(companyAction.fulfilled, (state, { payload }) => {
            if (payload) {
                state.companies = payload.data;
            }
        });
        builder.addCase(selectCompanyAction.fulfilled, (state, { payload }) => {
            if (payload) {
                state.selectedCompany = payload;
            }
        });
    }
})

export default companySlice;