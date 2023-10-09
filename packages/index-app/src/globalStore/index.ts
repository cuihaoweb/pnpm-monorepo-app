import {initGlobalState, MicroAppStateActions} from 'qiankun';
import {Store} from '@reduxjs/toolkit';
import store from '@/store';
import {setGlobal} from '@/store/global';
import {globalState} from './state';

const task: Function[] = [];

// eslint-disable-next-line no-shadow
export const initialGlobalState = (store: Store) => {
    store.dispatch(setGlobal(globalState));
    _onGlobalStateChange();
};

export const actions: MicroAppStateActions = initGlobalState(globalState);

export const getGlobalState = () => {
    return store.getState().global;
};

export const _onGlobalStateChange = () => actions.onGlobalStateChange((state, prev) => {
    if (JSON.stringify(state) === JSON.stringify(prev)) {
        return;
    }
    store.dispatch(setGlobal(state));
    task.forEach(callback => callback(state));
});

export const onGlobalStateChange = (callback: Function) => {
    task.push(callback);
};

export const offGlobalStateChange = () => actions.offGlobalStateChange();
