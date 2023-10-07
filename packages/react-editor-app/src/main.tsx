import {Root, createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {onCLS,onFID, onLCP} from 'web-vitals';
import router from '@/router';
import store from '@/store';
import '@/common/styles/index.less';

onLCP(console.log);
onFID(console.log);
onCLS(console.log);

let root: Root | undefined;
function render(props: {container?: HTMLElement}) {
    const {container} = props;

    root = createRoot(container || document.getElementById('root') as HTMLElement);

    root.render(
        <Provider store={store}>
            <h1>hello</h1>
            {/* <RouterProvider router={router} /> */}
        </Provider>
    );
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
}
