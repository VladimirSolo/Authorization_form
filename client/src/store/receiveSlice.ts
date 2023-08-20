import { createSlice } from '@reduxjs/toolkit';
import {receive} from './receiveThunk';
import { ResponseData } from './types';

export const initialState: ResponseData = {
    data: {
        email: '',
        number: '',
    },
    isLoading: 'idle',
    error: null
};

export const receiveSlice = createSlice({
    name         : 'receive',
    initialState,
    reducers     : {
        clearData: (state) => {
            state.data = initialState.data;
            state.error = initialState.error;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(receive.pending, (state) => {
                state.isLoading = 'pending';
                state.error = null;
            })
            .addCase(receive.fulfilled, (state, action) => {
                state.isLoading = 'succeeded';
                state.data = action.payload;

            })
            .addCase(receive.rejected, (state, action) => {
                state.isLoading = 'failed';
                state.error = action.payload || 'ERROR';
            })
    }
});

