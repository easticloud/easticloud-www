<template>
    <div class="m-certification">
        <div class="wp">
            <h3 class="m-certification-header m-title">
                <span class="u-title">资质认证</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-certification-content">
                <div class="u-item" v-for="(item, i) in data" :key="i">
                    <i class="u-item__img"><img :src="item.image" :alt="item.title" /></i>
                    <span class="u-item__text">
                        <span>{{ item.title1 }}</span>
                        <span>{{ item.title2 }}</span>
                    </span>
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
                {
                    image: "/images/index/certification/1.png",
                    title1: "ITSS®云计算服务能力",
                    title2: "标准符合性证书",
                },
                {
                    image: "/images/index/certification/2.png",
                    title1: "质量管理体系认证",
                    title2: "ISO9001",
                },
                {
                    image: "/images/index/certification/3.png",
                    title1: "信息安全管理体系认证",
                    title2: "ISO27001",
                },
                {
                    image: "/images/index/certification/4.png",
                    title1: "可信云服务认证",
                },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style scoped lang="less">
.m-certification {
    padding: 60px 0;
}
.m-certification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .u-item {
        .x;

        &__img {
            .h(140px);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__text {
            .db;
            .fz(16px,3);
            color: #374567;
        }
    }
}
@media screen and (max-width: @phone) {
    .m-certification {
        padding: 30px 0;
        .m-certification-content {
            flex-direction: column;
            .u-item {
                .size(100%,110px);
                .flex;
                align-items: center;
                .u-item__img {
                    .flex;
                    align-items: center;
                    width: 80px;
                }
                .u-item__text {
                    .flex;
                    .fz(14px,2);
                    .w(240px);
                    flex-direction: column;
                }
            }
        }
    }
}
</style>
