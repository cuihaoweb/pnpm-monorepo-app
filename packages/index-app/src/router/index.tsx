import {Spin} from 'antd';
import {Suspense} from 'react';
import {createHashRouter, redirect} from 'react-router-dom';
import App from '@/App';
import NotFound from '@/components/NotFound';
import Page from '@/views';

const {Home, About} = Page;
// console.log('🚀 ~ file: index.tsx:9 ~ Home:', Home)
const router = createHashRouter([
    // {
    //     path: '/',
    //     element: <App></App>,
    //     loader: () => redirect('/home'),
    // },
    // {
    //     path: '/home',
    //     element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
    // }
    {
        path: '/*',
        element: <App></App>,
        children: [
            // {
            //     path: 'upload_image',
            //     element: <Suspense fallback={<div><Spin/></div>}><UploadImage/></Suspense>
            // },
            // {
            //     path: 'record_vr',
            //     element: <Suspense fallback={<div><Spin/></div>}><RecordVr/></Suspense>
            // },
            {
                path: 'home',
                element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>,
                children: [
                    {
                        path: 'a',
                        element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
                    }
                ]
            },
            {
                path: 'about',
                element: <Suspense fallback={<div><Spin/></div>}><About/></Suspense>
            },
            // {
            //     path: 'history',
            //     element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
            // },
            {
                path: '*',
                loader: () => redirect('/home/a'),
                element: <NotFound/>
            }
        ]
    }
]);

export const NAV_LIST: {to: string, label: string}[] = [
    {
        to: '/upload_image',
        label: '上传图片'
    },
    {
        to: '/record_vr',
        label: '录入vr'
    },
    {
        to: '/pack_vr',
        label: '拼接VR'
    },
    {
        to: '/preview',
        label: '预览'
    },
    {
        to: '/history',
        label: '上传记录'
    }
];

export default router;
