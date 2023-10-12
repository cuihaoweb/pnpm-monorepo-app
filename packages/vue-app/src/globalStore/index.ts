import {createSubGlobalStore,SubGlobalStore} from 'shared';
import store from '@/store';

let globalStore: SubGlobalStore<typeof store>;

const initGlobalActions = (params: Parameters<typeof createSubGlobalStore<typeof store>>[0]) => {
    globalStore = createSubGlobalStore(params);
    params.store.commit('setGlobal', params.props.state);
};

const getGlobalStore = () => globalStore;

export {
    getGlobalStore,
    initGlobalActions
};

// let globalActions: any;

// interface initGlobalActionsParams {
//     store: Store<any>
//     state: Record<string, any>
//     actions: any,
//     onGlobalStateChange: Function
// }
// const initGlobalActions = (params: initGlobalActionsParams) => {
//     const {state, store, actions, onGlobalStateChange} = params;
//     globalActions = actions;

//     store.commit('setGlobal', state);

//     onGlobalStateChange((value: Record<string, any>) => {
//         store.commit('setGlobal', value);
//     });
// };

// const getGlobalActions = () => globalActions;

// export {
//     getGlobalActions,
//     initGlobalActions
// };
