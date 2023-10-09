import {initGlobalState, MicroAppStateActions} from 'qiankun';
import {Store} from '@reduxjs/toolkit';
import store from '@/store';
import {setGlobal} from '@/store/global';
import {Func} from '@/types/utils';
import {globalState} from './state';

const task: Func[] = [];
const actions: MicroAppStateActions = initGlobalState(globalState);

// eslint-disable-next-line no-shadow
const initialGlobalState = (store: Store) => {
    store.dispatch(setGlobal(globalState));
    initGlobalStateChange();
};

const initGlobalStateChange = () => actions.onGlobalStateChange((state, prev) => {
    if (JSON.stringify(state) === JSON.stringify(prev)) {
        return;
    }
    store.dispatch(setGlobal(state));
    task.forEach(callback => callback(state));
});

const getGlobalState = () => {
    return store.getState().global;
};

const onGlobalStateChange = (callback: Func) => {
    task.push(callback);
};

const offGlobalStateChange = () => actions.offGlobalStateChange();

export {
    actions,
    getGlobalState,
    initialGlobalState,
    offGlobalStateChange,
    onGlobalStateChange
};
