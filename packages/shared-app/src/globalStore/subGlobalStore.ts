import {OnGlobalStateChangeCallback} from 'qiankun';
import {qiankunProps} from '@/types/qiankun';

class SubGlobalStore<T> {
    private props: qiankunProps;
    private store: T;
    private getStateFn: (store: T) => Record<string, any>;

    constructor(params: {
        props: qiankunProps,
        store: T,
        onGlobalStateChange: OnGlobalStateChangeCallback,
        getState: (store: T) => Record<string, any>
    }) {
        const {props, onGlobalStateChange, store, getState} = params || {};
        this.store = store;
        this.getStateFn = getState;
        this.props = props;

        props.onGlobalStateChange((state, prev) => {
            onGlobalStateChange(state, prev);
        });
    }

    getState(): Record<string, any> {
        return this.getStateFn(this.store);
    }

    setState(state: Record<string, any>) {
        this.props.setGlobalState(state);
    }

    offStateChange() {
        this.props.offGlobalStateChange();
    }
}

export default SubGlobalStore;
