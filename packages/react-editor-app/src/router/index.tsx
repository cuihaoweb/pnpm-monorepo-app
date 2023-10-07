import {Spin} from 'antd';
import {Suspense} from 'react';
import {createHashRouter} from 'react-router-dom';
import App from '@/App';
import NotFound from '@/components/basic/NotFound';
import Page from '@/views';

const {Home, UploadImage, About, RecordVr} = Page;
const router = createHashRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <NotFound/>,
        children: [
            {
                path: 'upload_image',
                element: <Suspense fallback={<div><Spin/></div>}><UploadImage/></Suspense>
            },
            {
                path: 'record_vr',
                element: <Suspense fallback={<div><Spin/></div>}><RecordVr/></Suspense>
            },
            {
                path: 'pack_vr',
                element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
            },
            {
                path: 'preview',
                element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
            },
            {
                path: 'history',
                element: <Suspense fallback={<div><Spin/></div>}><Home/></Suspense>
            },
            {
                path: '*',
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
