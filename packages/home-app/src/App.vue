<script lang="tsx" setup>
</script>

<template>
    <h1>home App</h1>
    <router-link to="/sub-home/home">
        Home
    </router-link> |
    <router-link to="/sub-home/about">
        About
    </router-link>
    <router-view />
</template>

<style lang="scss" scoped>
.name {
    color: red;
}
</style>
