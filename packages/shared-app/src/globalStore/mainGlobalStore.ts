import {initGlobalState, MicroAppStateActions, OnGlobalStateChangeCallback} from 'qiankun';

class MainGlobalStore<T> {
    private store: T;
    private actions: MicroAppStateActions;
    private getStateFn: (store: T) => Record<string, any>;

    constructor(params: {
        store: T,
        state: Record<string, any>,
        onGlobalStateChange: OnGlobalStateChangeCallback,
        getState: (store: T) => Record<string, any>
    }) {
        this.store = params.store;
        this.actions = initGlobalState(params.state);
        this.getStateFn = params.getState;

        this.actions.onGlobalStateChange((state, prev) => {
            params.onGlobalStateChange(state, prev);
        });
    }

    offStateChange() {
        this.actions.offGlobalStateChange();
    }

    getState(): Record<string, any> {
        return this.getStateFn(this.store);
    }

    setState(state: Record<string, any>) {
        this.actions.setGlobalState(state);
    }
}

export default MainGlobalStore;
