<script setup>
import {loadMicroApp} from 'qiankun';
import {onBeforeUnmount, onMounted, ref} from 'vue';

const vueContainer = ref();
let microApp;

onMounted(() => {
    microApp = loadMicroApp({
        name: 'vue',
        entry: '//localhost:8081/sub-vue',
        container: vueContainer.value
    });
});

onBeforeUnmount(() => {
    microApp.unmount();
});
</script>


<template>
    <div ref="vueContainer" />
</template>


<style lang="scss">
</style>
