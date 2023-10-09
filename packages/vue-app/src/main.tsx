import {App as AppType, createApp} from 'vue';
import router from '@/router';
import App from './App.vue';
import {initGlobalActions} from './globalStore';
import store from './store';

interface qiankunProps {
    container?: HTMLElement,
    actions?: any,
    state?: any,
    onGlobalStateChange: Function
}
let app: AppType;
function render(props: qiankunProps) {
    const {container, state, actions, onGlobalStateChange} = props;
    app = createApp(App);
    initGlobalActions({state, actions, store, onGlobalStateChange});

    app.use(store);
    app.use(router);

    app.mount(container || '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
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
