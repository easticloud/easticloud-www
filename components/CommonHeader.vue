<template>
    <div class="c-header" :class="'theme-' + kv_mode">
        <div class="wp">
            <div class="c-header-left">
                <a class="c-header-logo" href="/">
                    <component :is="require(`../assets/img/logo.svg?inline`)" :fill="fill_color" />
                </a>
                <div class="c-header-nav">
                    <nuxt-link class="u-link" :to="item.href" v-for="(item, i) in data" :key="i">{{
                        item.label
                    }}
                    <div class="u-children" v-if="item.children && item.children.length">
                        <nuxt-link class="u-child" :to="child.href" v-for="(child,c) in item.children" :key="c">{{child.label}}</nuxt-link>
                    </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="c-header-right">
                <a href="#" class="u-btn u-lang">简</a>
                <a href="#" class="u-btn u-search">
                    <i class="u-icon el-icon-search"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { label: "产品服务", href: "", children: [
                    { label: "容器服务", href: "/production/container" },
                    { label: "EHPC", href: "/production/compute" },
                    { label: "裸金属服务器", href: "/production/servers" },
                    { label: "TikTok", href: "/production/international" }]
                },
                { label: "解决方案", href: "", children: [
                    { label: "混合云", href: "/solution/mix" },
                    { label: "TikTok", href: "/solution/tiktok" }]
                },
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
    computed: {
        kv_mode: function () { 
            const path = this.$route.path
            if(path.indexOf('solution') !== -1 || path.indexOf('production') !== -1 )  return 'blue';
            return this.$store.state.home.kv_mode;
        },
        fill_color : function (){
            const mode = {
                dark:'#ffffff',
                light:'#000000',
                blue:'#4162EB'
            }
            return mode[this.kv_mode];
        }
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
    .mr(40px);
    // .u-logo {
    //     .size(195px,43px);
    // }
}
.c-header-nav {
    display: flex;
    margin-top:10px;
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
                .lb(0,-5px);
                .size(100%,2px);
                .r(2px);
            }
        }
        &:hover .u-children {
            .flex;
        }
        .u-children{
            .pa;
            .lb(0,-46px);
            .none;
            .w(500px); 
            gap:20px;
            padding: 50px 0 10px 0;
        }
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
.c-header-theme(@color,@hover) {

    *{
        transition:0.1s ease-in-out;
    }
    .c-header-nav {
        .u-link {
            .color(@color);

            &:hover {
                color: @hover;
                .u-child { 
                    color: @hover;
                    &:hover{
                        text-decoration:underline;
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
    @color:rgba(255,255,255,0.8);
    @hover: #fff;
    .c-header-theme(@color,@hover);
}
.c-header.theme-light {
    @color:rgba(0,0,0,0.8);
    @hover: #000;
    .c-header-theme(@color,@hover);
}
.c-header.theme-blue {
    @color:rgba(0,0,0,0.8);
    @hover: #4162eb;
    .c-header-theme(@color,@hover);
}
</style>
