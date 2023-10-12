import {OnGlobalStateChangeCallback} from 'qiankun';

export interface qiankunProps {
    onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void
    setGlobalState: (state: Record<string, any>) => boolean
    offGlobalStateChange: () => boolean
    [key: string]: any;
}
