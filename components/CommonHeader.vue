<template>
    <div class="c-header">
        <div class="wp">
            <div class="c-header-left">
                <a class="c-header-logo" href="/">
                    <img class="u-logo" src="../assets/img/logo.svg" alt="东云科技" />
                    <!-- <component :is="require(`../assets/img/header-logo.svg?inline`)" fill="#ffffff" /> -->
                </a>
                <div class="c-header-nav">
                    <nuxt-link class="u-link" :to="item.href" v-for="(item, i) in data" :key="i">{{
                        item.label
                    }}</nuxt-link>
                </div>
            </div>
            <div class="c-header-right">
                <a href="#" class="u-btn u-lang">简</a>
                <a href="#" class="u-btn u-search"><img src="~assets/img/search.svg" alt="搜索" /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { label: "产品服务", href: "" },
                { label: "解决方案", href: "" },
                { label: "最新动态", href: "" },
                { label: "合作伙伴", href: "" },
                { label: "联系我们", href: "" },
                { label: "关于我们", href: "" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style scoped lang="less">
.c-header {
    position: absolute;
    top: 0;
    z-index: 100;
    .w(100%);
    .wp {
        .h(90px);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.c-header-left {
    display: flex;
    align-items: center;
}
.c-header-logo {
    .u-logo {
        .mr(40px);
        .size(195px,43px);
    }
}
.c-header-nav {
    display: flex;
    .u-link {
        .pr;
        .fz(16px);
        .color(rgba(255,255,255,.8));
        margin-right: 30px;
        padding: 10px 0;
        &:hover,
        &.active {
            &::after {
                content: "";
                .pa;
                .lb(0,-5px);
                .size(100%,2px);
                .r(2px);
            }
        }
        &:hover {
            color:#fff;
            &::after {
                background-color: rgba(255,255,255,.8);
            }
        }
    }
}
.c-header-right {
    .flex;
    gap: 20px;
    .u-btn {
        color: rgba(255,255,255,.8);
        border: 1px solid rgba(255,255,255,.8);
        .size(32px);
        .db;
        .x;
        .lh(32px);
        .r(50%);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            .db;
            .size(18px);
        }
        &:hover {
            color:#fff;
        }
    }
}
</style>
