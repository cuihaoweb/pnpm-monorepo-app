import {lazy} from 'react';

export default {
    Home: lazy(() => import('@/views/Home')),
    UploadImage: lazy(() => import('@/views/UploadImage')),
    About: lazy(() => import('@/views/About')),
    RecordVr: lazy(() => import('@/views/RecordVr'))
};
