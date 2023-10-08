import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {onCLS,onFID, onLCP} from 'web-vitals';
import router from '@/router';
import store from '@/store';
// import '@/common/styles/index.less';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

onLCP(console.log);
onFID(console.log);
onCLS(console.log);
