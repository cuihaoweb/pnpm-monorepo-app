export type GetKey<T> = keyof T;

export type MapType<T> = {
    [K in keyof T]: T[K]
};

export type Func = (...args: any) => any
