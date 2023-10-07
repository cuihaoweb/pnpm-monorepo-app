import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {VR} from '@/types/vr';

const initialState: {
    vrs: VR[]
} = {
    vrs: []
};
const vrSlice = createSlice({
    name: 'vr',
    initialState,
    reducers: {
        setVrsByIndex(state, actions: PayloadAction<{index: number, vr: VR}>) {
            const {index, vr} = actions.payload;
            state.vrs[index] = vr;
        },
        setVrs(state, actions: PayloadAction<VR[]>) {
            state.vrs = actions.payload;
        }
    }
});

export const {setVrs, setVrsByIndex} = vrSlice.actions;
export default vrSlice.reducer;
