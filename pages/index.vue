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

        <!-- 5.数据中心 -->
        <index-datacenter></index-datacenter>

        <!-- 6.资质认证 -->
        <index-certification></index-certification>

        <!-- 7.合作伙伴 -->
        <index-cooperation></index-cooperation>

        <!-- 8.公共底部 -->
        <common-footer></common-footer>
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
