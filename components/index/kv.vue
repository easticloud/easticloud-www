<template>
    <div class="m-slider">
        <el-carousel direction="horizontal" :autoplay="true" @change="changeHandle">
            <el-carousel-item class="u-item" v-for="(item, i) in data" :key="i">
                <a class="u-link" :href="item.href" :target="item.target" :style="`background-image: url(${item.src})`">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { getKV } from "@/utils/images";
export default {
    data() {
        return {
            data: [
                { href: "/solution/mix", target: "_blank", src: getKV("kv-2.png"), mode: "dark" },
                { href: "/production/servers", target: "_blank", src: getKV("kv-3.png"), mode: "dark" },
                { href: "/production/international", target: "_blank", src: getKV("kv-1.png"), mode: "light" },
            ],
        };
    },
    async asyncData({ params }) {},
    methods: {
        changeHandle(index) {
            this.$store.commit("home/setKVMode", this.data[index].mode);
        },
    },
};
</script>
<style lang="less">
.m-slider .u-link {
    .db;
    .h(550px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.el-carousel__container {
    height: 550px;
}
@media screen and (max-width: @phone) {
    .el-carousel__container {
        height: 176px;
    }
    .m-slider .u-link {
        .h(176px);
        background-position: center top;
        background-size: 150%;
    }
}
</style>
