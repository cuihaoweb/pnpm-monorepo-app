<template>
    <h1>vue App</h1>
    <router-link to="/sub-vue/home">
        Home
    </router-link> |
    <router-link to="/sub-vue/about">
        About
    </router-link>
    <router-view />
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    components: {
    },
    mounted () {
        window.vue = this;
    }
});
</script>

<style lang="scss">
</style>
