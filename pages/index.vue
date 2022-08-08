<template>
    <div class="p-index">
        <!-- 1.顶部kv -->
        <client-only>
            <index-kv></index-kv>
        </client-only>

        <!-- 2.公共头部 -->
        <common-header></common-header>

        <!-- 3.产品服务 -->
        <index-production></index-production>

        <!-- 4.解决方案 -->
        <index-solution></index-solution>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
