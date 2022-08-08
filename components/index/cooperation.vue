<template>
    <div class="m-cooperation">
        <div class="wp">
            <h3 class="m-cooperation-header m-title">
                <span class="u-title">合作伙伴</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-cooperation-content">
                <div class="u-item" v-for="(item, i) in data" :key="i">
                    <img :src="item.image" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { image: "/images/index/cooperation/01-阳光保险.svg" },
                { image: "/images/index/cooperation/01-阳光保险.svg" },
                { image: "/images/index/cooperation/01-阳光保险.svg" },
                { image: "/images/index/cooperation/01-阳光保险.svg" },
                { image: "/images/index/cooperation/01-阳光保险.svg" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
.m-cooperation {
    padding: 60px 0;
    background-color: #fafbff;
}
.m-cooperation-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .u-item{
        background-color:#fff;
        border:1px solid #E1E6F1;
        margin-left:-1px;
        margin-top:-1px;
        padding:20px 0;
        .x;
    }
}
</style>
