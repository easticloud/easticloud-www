<template>
    <div class="m-slider">
        <el-carousel height="550px" direction="horizontal" :autoplay="false">
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
                { href: "", target: "_blank", src: getKV("kv-1.png"), mode: "light" },
                { href: "", target: "_blank", src: getKV("kv-2.png"), mode: "light" },
                { href: "", target: "_blank", src: getKV("kv-3.png"), mode: "dark" },
            ],
        };
    },
    async asyncData({ params }) {
    },
};
</script>
