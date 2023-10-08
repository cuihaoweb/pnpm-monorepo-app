
import {RouteRecordRaw} from 'vue-router';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/sub-vue',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

export default {
    linkExactActiveClass: 'layui-this',
    routes
};
