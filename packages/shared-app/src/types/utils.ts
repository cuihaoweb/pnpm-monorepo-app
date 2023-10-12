export type GetKey<T> = keyof T;

export type MapType<T> = {
    [K in keyof T]: T[K]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Func = (...args: any) => any
