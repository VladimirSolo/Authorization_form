import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { receiveReducer } from './index'
import { ResponseData } from './types';

export interface StateStore {
    receive: ResponseData;
}

const rootReducer = combineReducers<StateStore>({
    receive: receiveReducer
});

export const store = configureStore({
    reducer   : rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            immutableCheck   : false,
            serializableCheck: false
        })
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
