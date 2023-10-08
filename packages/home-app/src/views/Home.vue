<template>
    <h3>Home</h3>
    <div>
        <p>当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行' }}</code>环境</p>
        <p>vuex的`global module`的user state：<code> {{ JSON.stringify(user) }}</code></p>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'MHome',
    components: {
    }
});
</script>

<style lang="scss">
</style>
