export interface VR {
    image: string;
    title: string;
    thumbnail: string;
    scenesName: string;
}
export const createDefaultVR = (): VR => {
    const vr: VR = {
        image: '',
        title: '',
        thumbnail: '',
        scenesName: ''
    };
    return vr;
};
