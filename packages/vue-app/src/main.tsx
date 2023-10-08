import {App as AppType, createApp} from 'vue';
import router from '@/router';
import App from './App.vue';
import store from './store';

let app: AppType;
function render(props: {container?: HTMLElement}) {
    const {container} = props;
    app = createApp(App);

    app.use(store);
    app.use(router);

    app.mount(container || '#app');
}

if (!window?.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('react app bootstraped');
}
  
export async function mount(props) {
    render(props);
}

export async function unmount() {
    app.unmount();
}
