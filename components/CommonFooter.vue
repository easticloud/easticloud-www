<template>
    <div class="c-footer">
        <div class="wp">
            <div class="c-footer-link">
                <div class="u-row">
                    <span class="u-label">友情链接</span>
                    <a class="u-link" :href="item.href" v-for="(item, i) in data" :key="i" target="_blank">{{
                        item.label
                    }}</a>
                </div>
                <div class="u-row">
                    <span class="u-label">联系电话</span>
                    <span class="u-value">025-82229268</span>
                    <span class="u-label">电子邮箱</span>
                    <span class="u-value">contact@easticloud.com</span>
                </div>
            </div>
            <div class="c-footer-logo">
                <img class="u-logo" src="@/assets/img/logo_origin.svg" alt="东云科技" />
                <span class="u-name">江苏东云互联网络科技有限公司</span>
            </div>
        </div>
        <div class="c-footer-beian">
            备案序号： <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备20035792号</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { label: "产品服务", href: "/production/container" },
                { label: "解决方案", href: "/solution/mix" },
                { label: "资质认证", href: "/certification" },
                { label: "合作伙伴", href: "/partner" },
                { label: "联系我们", href: "/contact" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less" scoped>
@color:rgba(255, 255, 255, 0.8);
.c-footer {
    background-color: #000c30;

    .wp {
        padding: 50px 0;
        .flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .color(@color);
    }
}
.c-footer-link {
    .u-row + .u-row {
        .mt(30px);
    }
    .u-label {
        .fz(18px);
        .mr(60px);
    }
    .u-label + .u-value {
        .mr(80px);
    }
    .u-link {
        .color(@color);
        .mr(50px);
        &:hover {
            text-decoration: underline;
        }
    }
}
.c-footer-logo {
    .u-name {
        .db;
        .mt(10px);
    }
}

.c-footer-beian {
    color: @color;
    border-top: 1px solid #1f2748;
    padding: 40px 0;
    .x;
    a {
        color: @color;
    }
}
@media screen and (max-width: @phone) {
    .c-footer .wp {
        flex-wrap: nowrap;
        justify-content: space-around;
        padding: 30px 0;
        .c-footer-link {
            zoom: 0.5;
            .u-row .u-label {
                .mr(20px);
            }
            .u-link {
                .mr(20px);
            }
            .u-label + .u-value {
                .mr(30px);
            }
        }
        .c-footer-logo{
            zoom: 0.4;
        }
    }
    .c-footer-beian{
        padding: 10px 0;
        .fz(12px);
    }
}
</style>
