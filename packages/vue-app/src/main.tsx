import {qiankunProps} from 'shared';
import {App as AppType, createApp} from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App.vue';
import {initGlobalActions} from './globalStore';

let app: AppType;
function render(props?: qiankunProps) {
    app = createApp(App);

    if (props) {
        initGlobalActions({
            props,
            store,
            onGlobalStateChange: (state, prev) => {
                if (JSON.stringify(state) === JSON.stringify(prev)) {
                    return;
                }
                store.dispatch('setGlobal', state);
            },
            getState: () => {
                return store.state.global;
            }
        });
    }

    app.use(store);
    app.use(router);

    app.mount(props?.container || '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('vue app');
}
  
export async function mount(props: qiankunProps) {
    render(props);
}

export async function unmount() {
    app.unmount();
}
