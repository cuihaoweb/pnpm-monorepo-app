import {Store} from 'vuex';

let globalActions: any;

interface initGlobalActionsParams {
    store: Store<any>
    state: Record<string, any>
    actions: any,
    onGlobalStateChange: Function
}
export const initGlobalActions = (params: initGlobalActionsParams) => {
    const {state, store, actions, onGlobalStateChange} = params;
    globalActions = actions;

    store.commit('setGlobal', state);

    onGlobalStateChange((value: Record<string, any>) => {
        store.commit('setGlobal', value);
    });
};

export const getGlobalActions = () => globalActions;
