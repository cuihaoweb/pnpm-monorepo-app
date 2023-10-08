<script lang="tsx" setup>
</script>

<template>
    <span @click="goto('/sub-vue')">subVue</span>
    <hr>
    <span @click="goto('/sub-home')">subReact</span>
    <router-view />
</template>

<style lang="scss" scoped>
.name {
    color: red;
}
</style>
