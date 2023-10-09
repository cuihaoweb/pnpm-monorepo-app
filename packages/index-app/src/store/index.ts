import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './global';
import pageReducer from './page';

const store = configureStore({
    reducer: {
        page: pageReducer,
        global: globalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;
