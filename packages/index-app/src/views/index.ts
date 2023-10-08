import {lazy} from 'react';

export default {
    Home: lazy(() => import('@/views/Home')),
    About: lazy(() => import('@/views/About')),
};
