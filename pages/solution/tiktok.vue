<template>
    <div class="p-solution" id="top">
        <common-header class="theme-light"></common-header>
        <div class="m-header m-tiktok">
            <div class="wp">
                <h2>TikTok解决方案</h2>
                <p class="u-desc">
                    抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。
                </p>
                <a class="u-btn" href="http://" target="_blank">方案咨询</a>
            </div>
        </div>
        <div class="m-tabs wp">
            <a href="#tab1" class="u-tab active">关于TikTok</a>
            <a href="#tab2" class="u-tab">发展趋势</a>
            <a href="#tab3" class="u-tab">方案优势</a>
            <a href="#tab4" class="u-tab">客户案例</a>
        </div>
        <div class="m-box wp" id="tab1">
            <h3>关于TikTok</h3>
            <div class="u-box">
                <span class="u-link no-border">
                    <img src="../../static/images/index/solution/t1.png" alt="" />
                </span>
                <span class="u-link no-border">
                    <img src="../../static/images/index/solution/t2.png" alt="" />
                </span>
                <span class="u-link no-border">
                    <img src="../../static/images/index/solution/t3.png" alt="" />
                </span>
            </div>
        </div>
        <div class="m-box" id="tab2">
            <h3 class="wp">发展趋势</h3>
            <img class="u-bg" src="../../static/images/index/solution/bg.png" alt="" srcset="" />
        </div>
        <div class="m-box wp" id="tab3">
            <h3>方案优势</h3>
            <div class="m-plan">
                <div class="u-info">
                    <img class="u-logo" src="../../static/images/index/solution/logo.png" />
                    <span class="u-desc"
                        >TikTok提供了独一无二的广告产品解决方案及沉浸式的广告形式，建立了品牌与用户之间高效、深度的连接。TikTok
                        Ads是字节跳动旗下面向全球广告主的营销服务品牌。整合了TikTok，Vigo Video，TopBuzz，BuzzVideo，New
                        Republic，Helo，Babe等流量产品，汇聚海量流量、数据、优质内容。为全球广告合作伙伴提供综合数字营销解决方案，帮助品牌实现和用户的高效沟通。</span
                    >
                    <a href="" arget="_blank" class="u-btn"><span>立即加入</span></a>
                </div>
                <img class="u-img" src="../../static/images/index/solution/img.png" />
            </div>
        </div>
        <div class="m-box wp" id="tab4">
            <h3>客户案例</h3>
            <div class="u-box">
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m4.png" alt="" />
                </a>
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m5.png" alt="" />
                </a>
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m6.png" alt="" />
                </a>
            </div>
        </div>
        <div class="m-goBack">
            <a href="#top">返回顶部 →</a>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
export default {
    name: "SolutionTiktok",
};
</script>

<style lang="less">
@import "~@/assets/css/solution.less";
</style>
<style lang="less">
.m-solution {
    .m-box {
        .u-bg {
            margin: 30px 0;
        }
    }
    .m-plan {
        .flex;
        .mt(30px);
        gap: 80px;
        align-items: center;
        .u-img {
            flex-shrink: 0;
            .size(415px,225px);
        }
        .u-info {
            .flex;
            flex-direction: column;
            .u-logo {
                .size(228px,56px);
                flex-shrink: 0;
                .mb(20px);
            }
            .u-desc {
                .fz(18px,2);
                .color(#7488a4);
            }
            .u-btn {
                .mt(20px);
                span {
                    padding: 5px 20px;
                    border: 1px solid #4162eb;
                    .r(3px);
                    .mr(20px);
                    background-color: #fff;
                    color: #4162eb;
                }
            }
        }
    }
}
</style>
