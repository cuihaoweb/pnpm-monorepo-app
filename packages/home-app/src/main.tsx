import {App as AppType,createApp} from 'vue';
import App from './App.vue';
import router from './router';

let app: AppType;
function render(props: {container?: HTMLElement}) {
    const {container} = props;
    app = createApp(App);

    app.use(router);

    app.mount(container || '#app');
}

if (!window?.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('home app bootstraped');
}
  
export async function mount(props) {
    render(props);
}

export async function unmount() {
    app.unmount();
}
