import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../services';
import { IData } from './types';


export const receive = createAsyncThunk<IData, { email: string; number: string }, { rejectValue: string }>(
    'receive',
    async ({ email, number }, thunkAPI) => {
        try {
            const response = await apiRequest.post<IData>('api/email', { email, number })

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);