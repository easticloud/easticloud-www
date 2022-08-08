<template>
    <div class="m-datacenter">
        <div class="wp">
            <h3 class="m-datacenter-header m-title">
                <span class="u-title">数据中心</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-datacenter-content">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
.m-datacenter {
    padding: 60px 0;
    background-color: #FAFBFF;
}
</style>
