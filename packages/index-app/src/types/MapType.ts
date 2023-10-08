export type MapType<T> = {
    [K in keyof T]: T[K]
};
