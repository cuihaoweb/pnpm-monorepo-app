
import {RouteRecordRaw} from 'vue-router';
import ReactApp from '@/views/ReactApp.vue';
import VueApp from '@/views/VueApp.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/sub-vue'
    },
    {
        path: '/sub-vue',
        name: 'vue',
        component: VueApp
    },
    {
        path: '/sub-home',
        name: 'home',
        component: ReactApp
    },
    {
        path: '/sub-react',
        name: 'react',
        component: ReactApp
    }
];

export default {
    linkExactActiveClass: 'layui-this',
    routes
};
