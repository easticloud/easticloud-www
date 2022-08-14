<template>
    <div class="m-solution">
        <div class="wp">
            <h3 class="m-solution-header m-title">
                <span class="u-title">解决方案</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-solution-content">
                <div class="u-tabs">
                    <span
                        class="u-tab"
                        v-for="(item, key) in tabs"
                        :key="item.value"
                        :class="tabIndex == key ? 'active' : ''"
                        @click="changeTab(item.value)"
                        >{{ item.name }}</span
                    >
                </div>
                <div class="u-solution">
                    <img class="u-img" :src="solutions.src" :alt="solutions.title" />
                    <div class="u-info">
                        <span class="u-title">{{ solutions.title }}</span>
                        <span class="u-desc">{{ solutions.desc }}</span>
                        <span><nuxt-link class="u-more" :to="solutions.href" target="_blank">了解详情</nuxt-link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabIndex: 0,
            tabs: [
                { name: "混合云解决方案", value: 0 },
                { name: "Tiktok解决方案", value: 1 },
            ],
            data: [
                {
                    title: "混合云解决方案",
                    desc: "通过私有云+公有云的部署模式，能将用户私有云业务和公有云业务无缝联接，实现资源的灵活调度。同时，可以将用户孤岛化、碎片化的 IT 资源通过公有云无缝连接起来，实现所有 IT 资源的互联互通。",
                    href: "/solution/mix",
                    src: "/images/index/solution/1.png",
                },
                {
                    title: "Tiktok解决方案",
                    desc: "抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。",
                    href: "/solution/tiktok",
                    src: "/images/index/solution/2.png",
                },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
    computed: {
        solutions() {
            return this.data[this.tabIndex];
        },
    },
    methods: {
        changeTab(i) {
            this.tabIndex = i;
            console.log(this.tabIndex);
        },
    },
};
</script>

<style lang="less">
.m-solution {
    padding: 60px 0 80px 0;
}
.m-solution-content {
    .u-tabs {
        .mt(20px);
        .flex;
        .fz(18px,1.2);
        .u-tab {
            .pr;
            .pointer;
            padding: 20px 26px;
            &::before {
                content: "";
                .pa;
                .lb(0,0);
                .size(100%,2px);
                background: #e1e6f1;
            }
            &.active {
                .color(#4162eb);
                &:before {
                    background: #4162eb;
                }
            }
        }
        .u-tabs + .u-tabs {
            border-left: 1px solid #e1e6f1;
        }
    }
    .u-solution {
        .flex;
        .mt(50px);
        gap: 40px;
        .u-img {
            .w(360px);
            flex-shrink: 0;
        }
        .u-info {
            .flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            .u-title {
                .fz(24px);
                .bold;
            }
            .u-desc {
                letter-spacing: 1px;
                .fz(16px,2);
                .color(#7488a4);
            }
            .u-more {
                @color:#4162eb;
                .dbi;
                .r(3px);
                .fz(16px);
                .color(@color);
                padding: 5px 12px;
                border: 1px solid @color;
                &:hover{
                    background-color: @color;
                    color:#fff;
                }
            }
        }
    }
}
</style>
