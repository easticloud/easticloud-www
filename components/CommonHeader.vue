<template>
    <div class="c-header" :class="'theme-' + kv_mode">
        <div class="wp">
            <div class="c-header-left">
                <a class="c-header-logo" href="/">
                    <component :is="require(`../assets/img/logo.svg?inline`)" :fill="fill_color" />
                </a>
                <div class="c-header-nav">
                    <div class="u-item" v-for="(item, i) in data" :key="i">
                        <template v-if="item.children && item.children.length">
                            <el-dropdown>
                                <nuxt-link class="u-link" :to="item.href">
                                    {{ item.label }}
                                </nuxt-link>
                                <el-dropdown-menu slot="dropdown" class="c-header-subnav">
                                    <el-dropdown-item v-for="(child, c) in item.children" :key="c">
                                        <nuxt-link class="u-child" :to="child.href">{{ child.label }}</nuxt-link>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                        <nuxt-link class="u-link" :to="item.href" v-else>{{ item.label }}</nuxt-link>
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
    data () {
        return {
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
    async asyncData ({ params }) {
        return {};
    },
    computed: {
        kv_mode: function () {
            return this.$store.state.home.kv_mode;
        },
        fill_color: function () {
            const mode = {
                dark: "#ffffff",
                light: "#000000",
                blue: "#4162EB",
            };
            return mode[this.kv_mode];
        },
    },
    watch: {
        $route: {
            handler (to) {
                const path = to.path.replace("/", "")
                path ? this.$store.commit("home/setKVMode", 'blue') : this.$store.commit("home/setKVMode", 'dark');
            },
            immediate: true,
        }
    }
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
    .mr(40px);
    // .u-logo {
    //     .size(195px,43px);
    // }
}

.c-header-nav {
    display: flex;
    margin-top: 10px;

    .u-link {
        .pr;
        .fz(16px);
        margin-right: 20px;
        padding: 10px;

        &:hover,
        &.active {
            &::after {
                content: "";
                .pa;
                .lb(0, -5px);
                .size(100%, 2px);
                .r(2px);
            }
        }

        // &:hover .u-children {
        //     .flex;
        // }
    }
}

.c-header-subnav {
    // .pa;
    // margin-top: 25px;
    // margin-left: -10px;
    // .none;
    // padding: 15px 30px;
    // background-color: #fff;
    // .r(6px);
    // white-space: nowrap;

    .el-dropdown-menu__item {
        padding: 0;
    }

    a {
        color: #333 !important;
        padding: 0 20px;
        .db;
        // margin-right: 30px;
        // &:last-child {
        //     margin-right: 0;
        // }
    }
}

.c-header-right {
    .flex;
    gap: 20px;

    .u-btn {
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
    }
}

.c-header-theme(@color, @hover) {
    * {
        transition: 0.1s ease-in-out;
    }

    .c-header-nav {
        .u-link {
            .color(@color);

            &:hover {
                color: @hover;

                .u-child {
                    color: @hover;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                &::after {
                    background-color: @hover;
                }
            }
        }
    }

    .c-header-right {
        .u-btn {
            color: @color;
            border: 1px solid @color;

            &:hover {
                color: @hover;
            }
        }
    }
}

.c-header.theme-dark {
    @color: rgba(255, 255, 255, 0.8);
    @hover: #fff;
    .c-header-theme(@color, @hover);
}

.c-header.theme-light {
    @color: rgba(0, 0, 0, 0.8);
    @hover: #000;
    .c-header-theme(@color, @hover);
}

.c-header.theme-blue {
    @color: rgba(0, 0, 0, 0.8);
    @hover: #4162eb;
    .c-header-theme(@color, @hover);
}
</style>
