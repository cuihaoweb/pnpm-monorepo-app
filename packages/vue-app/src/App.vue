<template>
    <h1>vue App</h1>
    <h3 @click="onClick">
        全局数据： {{ global.userName }}
    </h3>
    <router-link to="/sub-vue/home">
        Home
    </router-link> |
    <router-link to="/sub-vue/about">
        About
    </router-link>
    <router-view />
</template>

<script>
import {computed, defineComponent} from 'vue';
import {useStore} from 'vuex';
import {getGlobalStore} from './globalStore';

export default defineComponent({
    setup() {
        const store = useStore();
        const global = computed(() => store.state.global);

        const onClick = () => {
            getGlobalStore().setState({userName: 'vue'});
        };

        return {
            global,
            onClick
        };
    }
});
</script>

<style lang="scss">
</style>
