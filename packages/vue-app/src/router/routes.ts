
import {RouteRecordRaw} from 'vue-router';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/sub-vue',
        children: [
            {
                path: 'index',
                name: 'index',
                component: Home
            },
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'about',
                name: 'about',
                component: About
            }
        ]
    }
];

export default routes;
