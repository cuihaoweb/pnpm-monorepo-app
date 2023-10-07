import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import pageReducer from './page';
import vrSlice from './vr';

const store = configureStore({
    reducer: {
        page: pageReducer,
        vr: vrSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false // 禁用序列化检查
    })
});

export type RootState = ReturnType<typeof store.getState>
export default store;
