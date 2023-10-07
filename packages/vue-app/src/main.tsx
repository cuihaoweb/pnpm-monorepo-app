import {App, createApp} from 'vue';
import directives from '@/common/directives';
import Alert from '@/components/modules/alert';
import router from '@/router';
import App from './App.vue';
import store from './store';
import '@/common/vee-validate';

let app: App = null;
function render(props: {container?: HTMLElement}) {
    const {container} = props;
    app = createApp(App);

    app.use(Alert);

    app.use(store);
    app.use(router);

    Object.keys(directives).forEach((key) => {
        app.directive(key, directives[key]);
    });

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
