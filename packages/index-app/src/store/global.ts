import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {globalState} from '@/globalStore/state';
import {MapType} from '@/types/utils';

const globalSlice = createSlice({
    name: 'global',
    initialState: globalState,
    reducers: {
        setGlobal(state, action: PayloadAction<MapType<typeof state>>) {
            Object.assign(state, action.payload);
        }
    }
});

export const {setGlobal} = globalSlice.actions;

export default globalSlice.reducer;
