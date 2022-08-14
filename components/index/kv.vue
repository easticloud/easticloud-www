<template>
    <div class="m-slider">
        <el-carousel height="550px" direction="horizontal" :autoplay="true" @change="changeHandle">
            <el-carousel-item v-for="(item, i) in data" :key="i">
                <a :href="item.href" :target="item.target"><img :src="item.src" /></a>
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
                { href: "", target: "_blank", src: getKV("kv-1.png"), mode: "dark" },
                { href: "", target: "_blank", src: getKV("kv-2.png"), mode: "dark" },
                { href: "", target: "_blank", src: getKV("kv-3.png"), mode: "light" },
            ],
        };
    },
    async asyncData({ params }) {
    },
    methods: {
        changeHandle(index) {
            this.$store.commit("home/setKVMode", this.data[index].mode);
        },
    },
};
</script>
<style scoped lang="less">
.m-slider .el-carousel .el-carousel__item a {
    .flex;
    img {
        .auto(x);
    }
}
</style>
