// import {initGlobalState, MicroAppStateActions} from 'qiankun';
import {createGlobalStore, GlobalStore} from 'shared';
import {Store} from '@reduxjs/toolkit';
import realStore from '@/store';
// import store from '@/store';
import {setGlobal} from '@/store/global';
import {globalState} from './state';
// import {Func} from '@/types/utils';
// import {globalState} from './state';

let globalStore: GlobalStore<Store>;
const initGlobalStore = (store: typeof realStore) => {
    globalStore =  createGlobalStore({
        store,
        state: globalState,
        getState: store => {
            return store.getState().global;
        }
    });

    globalStore.onStateChange((state, prev) => {
        if (JSON.stringify(state) === JSON.stringify(prev)) {
            return;
        }
        store.dispatch(setGlobal(state));
    });
};

// globalStore.onStateChange((state, prev) => {
//     if (JSON.stringify(state) === JSON.stringify(prev)) {
//         return;
//     }
//     store.dispatch(setGlobal(state));
// });

// const task: Func[] = [];
// const actions: MicroAppStateActions = initGlobalState(globalState);

// // eslint-disable-next-line no-shadow
// const initialGlobalState = (store: Store) => {
//     store.dispatch(setGlobal(globalState));
//     initGlobalStateChange();
// };

// const initGlobalStateChange = () => actions.onGlobalStateChange((state, prev) => {
//     if (JSON.stringify(state) === JSON.stringify(prev)) {
//         return;
//     }
//     store.dispatch(setGlobal(state));
//     task.forEach(callback => callback(state));
// });

// const getGlobalState = () => {
//     return store.getState().global;
// };

// const onGlobalStateChange = (callback: Func) => {
//     task.push(callback);
// };

// const offGlobalStateChange = () => actions.offGlobalStateChange();

export {
    globalStore,
    initGlobalStore
    // actions,
    // getGlobalState,
    // initialGlobalState,
    // offGlobalStateChange,
    // onGlobalStateChange
};
