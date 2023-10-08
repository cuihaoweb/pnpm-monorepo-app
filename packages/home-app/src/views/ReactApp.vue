<script setup>
import {loadMicroApp} from 'qiankun';
import {onBeforeUnmount, onMounted, ref} from 'vue';

const reactContainer = ref();
let microApp;

onMounted(() => {
    microApp = loadMicroApp({
        name: 'home',
        entry: '//localhost:8084/sub-home',
        container: reactContainer.value
    });
});

onBeforeUnmount(() => {
    microApp.unmount();
});
</script>

<template>
    <div ref="reactContainer" />
</template>

<style lang="scss">
</style>
