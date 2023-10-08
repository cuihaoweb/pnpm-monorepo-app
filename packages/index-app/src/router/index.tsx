import {Spin} from 'antd';
import {Suspense} from 'react';
import {createHashRouter, redirect} from 'react-router-dom';
import App from '@/App';
import NotFound from '@/components/basic/NotFound';
import Page from '@/views';

const {Home, About} = Page;
const router = createHashRouter([
    {
        path: '/*',
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: 'sub-home/*',
                element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
            },
            {
                path: 'sub-vue/*',
                element: <Suspense fallback={<div><Spin/></div>}><About/></Suspense>
            },
            {
                path: '*',
                loader: () => redirect('sub-vue/index'),
                element: <NotFound/>
            }
        ]
    }
]);

export const NAV_LIST: {to: string, label: string, path: string}[] = [
    {
        path: 'sub-vue',
        to: 'sub-vue/index',
        label: 'vue app'
    },
    {
        path: 'sub-home',
        to: 'sub-home/index',
        label: 'home app'
    }
];

export default router;
