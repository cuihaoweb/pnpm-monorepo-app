import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ImageInfo {
    url: string
    name: string
    base64: string
    file: File | undefined
}
export const createDefaultImageInfo = (): ImageInfo => ({
    url: '',
    name: '',
    base64: '',
    file: undefined
});
const initialState: {
    images: ImageInfo[],
    groupName: string
} = {
    images: [],
    groupName: 'cuihao04'
};
export type initialState = typeof initialState;

const pageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        updateImages(state, actions: PayloadAction<ImageInfo[]>) {
            state.images = actions.payload;
        },
        setImage(state, actions: PayloadAction<{index: number, image: ImageInfo}>) {
            const {index, image} = actions.payload;
            state.images[index] = image;
        },
        setGroupName(state, actions: PayloadAction<string>) {
            state.groupName = actions.payload;
        }
    }
});

export const {updateImages, setImage, setGroupName} = pageSlice.actions;

export default pageSlice.reducer;
