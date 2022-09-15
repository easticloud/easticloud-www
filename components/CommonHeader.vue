<template>
    <div class="c-header" :class="'theme-' + kv_mode">
        <div class="wp" :class="{ 'c-header-show': show }">
            <div class="c-header-left">
                <a class="c-header-logo" href="/">
                    <component class="u-svg" :is="require(`../assets/img/logo.svg?inline`)" :fill="fill_color" />
                </a>
                <span class="u-menu" @click="showMenu">
                    <component class="u-svg" :is="require(`../assets/img/menu.svg?inline`)" :fill="fill_color" />
                </span>

                <div class="c-header-nav">
                    <div
                        class="m-link"
                        v-for="(item, i) in data"
                        :key="i"
                        :class="{ children: item.children && item.children.length }"
                        @click="toShow(item)"
                    >
                        <nuxt-link class="u-link" :to="item.href">
                            {{ item.label }}
                        </nuxt-link>
                        <span class="u-arr" v-if="item.children" :class="item.label == label ? 'flip' : ''">
                            <component
                                class="u-svg"
                                :is="require(`../assets/img/arrow.svg?inline`)"
                                :fill="fill_color"
                            />
                        </span>
                        <div
                            class="u-subnav"
                            :class="item.label == label ? 'show' : ''"
                            v-if="item.children && item.children.length"
                        >
                            <span class="u-arr"></span>
                            <div class="u-box" @click="toShow(item)">
                                <nuxt-link
                                    class="u-child"
                                    v-for="(child, c) in item.children"
                                    :key="c"
                                    :to="child.href"
                                    >{{ child.label }}</nuxt-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="c-header-right">
                <a href="#" class="u-btn u-lang">简</a>
                <nuxt-link to="/search" class="u-btn u-search">
                    <i class="u-icon el-icon-search"></i>
                </nuxt-link>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            label: "",
            data: [
                {
                    label: "产品服务",
                    href: "",
                    children: [
                        { label: "容器服务", href: "/production/container" },
                        { label: "EHPC", href: "/production/compute" },
                        { label: "裸金属服务器", href: "/production/servers" },
                        { label: "TikTok", href: "/production/international" },
                    ],
                },
                {
                    label: "解决方案",
                    href: "",
                    children: [
                        { label: "混合云", href: "/solution/mix" },
                        { label: "TikTok", href: "/solution/tiktok" },
                    ],
                },
                { label: "资质认证", href: "/certification" },
                { label: "合作伙伴", href: "/partner" },
                { label: "联系我们", href: "/contact" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
    computed: {
        kv_mode: function () {
            return this.show ? "blue" : this.$store.state.home.kv_mode;
        },
        fill_color: function () {
            const mode = {
                dark: "#ffffff",
                light: "#000000",
                blue: "#4162EB",
            };
            return mode[this.kv_mode];
        },
        hide() {},
    },
    methods: {
        showMenu() {
            this.show = true;
        },
        toShow(item) {
            if (!this.show) return;
            if (item.children) {
                this.label = item.label;
            } else {
                this.show = false;
                this.$router.push({ path: item.href });
            }
        },
    },
    watch: {
        $route: {
            handler(to) {
                const path = to.path.replace("/", "");
                path ? this.$store.commit("home/setKVMode", "blue") : this.$store.commit("home/setKVMode", "dark");
            },
            immediate: true,
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/header.less";
</style>
