<template>
    <div class="c-header">
        <div class="wp">
            <div class="c-header-left">
                <a class="c-header-logo" href="/">
                    <img class="u-logo" src="@/assets/img/logo.svg" svg-inlne alt="东云科技" />
                </a>
                <div class="c-header-nav">
                    <a
                        class="u-link"
                        :class="{ active: active == i }"
                        :href="item.href"
                        :target="item.target"
                        v-for="(item, i) in nav"
                        :key="i"
                        >{{ item.label }}</a
                    >
                </div>
            </div>
            <div class="c-header-right">
                <a href="#" class="u-btn u-lang">简</a>
                <a href="#" class="u-btn u-search"><img class="u-logo" src="~assets/img/search.svg" alt="搜索" /></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style scoped lang="less">
.c-header {
    background-color: #080e1a;
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
        .color(#fff);
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
            &::after {
                background-color: #fff;
            }
        }
        &.active {
            &::after {
                background-color: #295efd;
            }
        }
    }
}
.c-header-right {
    .flex;
    gap: 20px;
    .u-btn {
        background-color: #295efd;
        color: #fff;
        border-color: #295efd;
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
            filter: brightness(120%);
        }
    }
}
</style>
