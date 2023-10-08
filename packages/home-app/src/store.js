import {initGlobalState} from 'qiankun';
import {ref} from 'vue';

const initialState = ref({
    user: {
        name: 'zhangsan'
    }
});

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((newState, prev) => {
    console.log('main change', JSON.stringify(newState), JSON.stringify(prev));

    for (const key in newState) {
        initialState[key] = newState[key];
    }
});

actions.getGlobalState = (key) => {
    return key ? initialState[key] : initialState;
};

export default actions;
