<template>
    <div class="m-production">
        <div class="wp">
            <h3 class="m-production-header m-title">
                <span class="u-title">产品服务</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-production-content">
                <div class="u-list">
                    <nuxt-link class="u-item" :to="item.href" v-for="(item, i) in data" :key="i">
                        <i class="u-img"><img :src="item.src" /></i>
                        <span class="u-title">{{ item.title }}</span>
                        <span class="u-desc">{{ item.desc }} </span>
                        <img class="u-more" src="~assets/img/more.svg" alt="→" />
                    </nuxt-link>
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
                    src: "/images/index/production/3.svg",
                    href: "/production/servers",
                    target: "_blank",
                    title: "裸金属服务器",
                    desc: "提供高性能、资源独享、安全隔离的专属弹性裸金属服务器，同时具备云资源的敏捷性、灵活性与高可用。",
                },
                {
                    src: "/images/index/production/1.svg",
                    href: "/production/compute",
                    target: "_blank",
                    title: "高性能计算",
                    desc: "安全、弹性、快捷的高效云上高性能计算平台，能支持计算资源的弹性定制。",
                },
                {
                    src: "/images/index/production/4.svg",
                    href: "/production/container",
                    target: "_blank",
                    title: "容器引擎",
                    desc: "深度整合Kubernetes，为用户提供以多集群、多租户为核心的资源管理能力，以应用商店、可视化编排为核心的应用部署能力。",
                },
                {
                    src: "/images/index/production/2.svg",
                    href: "/production/international",
                    target: "_blank",
                    title: "海外加速专线",
                    desc: "游戏场景、互联网应用加速。",
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
.m-production {
    padding: 60px 0;
    background-color: #fafbff;
}
.m-production-content {
    .u-list {
        flex-shrink: 0;
        width: 100%;
        .flex;
        .mt(40px);
        flex-wrap: wrap;
        gap: 16px;
    }

    .u-item {
        .pr;
        .r(5px);
        .size(288px,340px);
        background-color: #fff;
        padding: 30px 30px 30px;
        box-sizing: border-box;
        border: 1px solid #e9eefe;
        transition: all 0.2s ease-in-out;
        .u-img {
            .size(80px);
            .db;
            // .x;
            // .auto(x);
            // display: flex;
            // align-items: center;
            // justify-content: center;
            img,
            svg {
                .db;
                .size(100%);
            }
        }
        .u-title {
            .db;
            // .x;
            .mt(10px);
            .fz(22px,2);
            .color(#232323);
        }
        .u-desc {
            .fz(16px,1.8);
            .color(#7488a4);
            .break(4);
            font-weight: 300;
        }
        .u-more {
            .pa;
            .rb(20px,20px);
            .pointer;
            .size(50px,12px);
        }
        &:hover {
            transform: scale(1.05);
        }
    }
}
@media screen and(max-width:@phone) {
    .m-production {
        padding: 20px 0;
    }
    .m-production-content {
        .u-list {
            .mt(0);
            .flex;
            justify-content: center;
            .u-item {
                .size(100%,200px);
                padding: 20px;
                .u-img {
                    .size(30px);
                }
                .u-title {
                    .fz(16px);
                }
                .u-desc {
                    .fz(12px);
                }
            }
        }
    }
}
</style>
