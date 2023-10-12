import MainGlobalStore from './mainGlobalStore';
import SubGlobalStore from './subGlobalStore';

const createMainGlobalStore = <T>(params: ConstructorParameters<typeof MainGlobalStore<T>>[0]) => {
    return new MainGlobalStore(params);
};

const createSubGlobalStore = <T>(params: ConstructorParameters<typeof SubGlobalStore<T>>[0]) => {
    return new SubGlobalStore(params);
};

export {
    createMainGlobalStore,
    createSubGlobalStore,
    MainGlobalStore,
    SubGlobalStore
};
