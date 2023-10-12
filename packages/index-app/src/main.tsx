import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {createGlobalStore} from 'shared';
import {onCLS,onFID, onLCP} from 'web-vitals';
import router from '@/router';
import store from '@/store';
import {initGlobalStore} from './globalStore';
import {setGlobal} from './store/global';
import '@/common/styles/index.less';

initGlobalStore(store);
// const globalStore =  createGlobalStore({
//     store,
//     state: {},
//     getState: (store) => {
//         return store.getState().global;
//     }
// });
// globalStore.onStateChange((state, prev) => {
//     if (JSON.stringify(state) === JSON.stringify(prev)) {
//         return;
//     }
//     store.dispatch(setGlobal(state));
// });
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

onLCP(console.log);
onFID(console.log);
onCLS(console.log);
