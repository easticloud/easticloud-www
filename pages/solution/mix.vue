<template>
    <div class="m-solution" id="top">
        <common-header class="theme-blue"></common-header>
        <div class="m-header m-mix">
            <div class="wp">
                <h2>混合云解决方案</h2>
                <p class="u-desc">
                    通过私有云+公有云的部署模式，能将用户私有云业务和公有云业务无缝联接，实现资源的灵活调度。同时，可以将用户孤岛化、碎片化的
                    IT 资源通过公有云无缝连接起来，实现所有 IT 资源的互联互通。
                </p>
                <a class="u-btn" href="http://" target="_blank">方案咨询</a>
            </div>
        </div>
        <div class="m-tabs wp">
            <a href="#tab1" class="u-tab active">架构需求</a>
            <a href="#tab2" class="u-tab">架构示例</a>
            <a href="#tab3" class="u-tab">方案优势</a>
            <a href="#tab4" class="u-tab">客户案例</a>
        </div>

        <div class="m-box wp" id="tab1">
            <h3>架构需求</h3>
            <div class="u-box">
                <div class="u-item u-item-1">
                    <span class="u-title">什么是混合云？</span>
                    <span class="u-desc">混合云融合公有云、私有云和内部IT，兼顾企业安全性、灵活性和可用性。</span>
                </div>
                <div class="u-item u-item-2">
                    <span class="u-title">为什么要扩展至边缘？</span>
                    <span class="u-desc">5G来临，终端数据爆发，计算正向边缘转移。</span>
                </div>
                <div class="u-item u-item-3">
                    <span class="u-title">如何基于边缘云构建<br />混合云架构？</span>
                    <span class="u-desc">通过东云边缘云平台，构建全球范围内公有云、私有云的专属网络。</span>
                </div>
            </div>
        </div>
        <div class="m-box wp" id="tab2">
            <h3>架构示例</h3>
            <div class="m-example">
                <div class="m-imgBox">
                    <img src="../../static/images/index/solution/cloud.png" alt="" />
                </div>
                <div class="m-infoBox">
                    <h4 class="u-title">架构</h4>
                    <span class="u-item">
                        <i class="yellow"></i>
                        <span>按需直连公有云，包括AWS，谷歌云，阿里云，Azure，腾云讯，Ucloud，等等。</span>
                    </span>
                    <span class="u-item">
                        <i class="blue"></i>
                        <span>可随时开通东云裸机云作为私有云，同时私有云之间互相打通。</span>
                    </span>
                    <span class="u-item">
                        <i class="purple"></i>
                        <span>办公室、数据中心可以通过本地楼内线等方式就近接入东云骨干网Pops</span>
                    </span>
                    <span class="u-item">
                        <i class="green"></i>
                        <span>直宽带 1 Mbps - 10 Gbps</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="m-box wp" id="tab3">
            <h3>方案优势</h3>
            <div class="u-box">
                <div class="u-item u-column">
                    <img class="u-img" src="../../static/images/index/solution/i1.png" alt="" />
                    <span class="u-title">公私统一架构</span>
                    <span class="u-desc"
                        >以一致的技术架构为混合云用户交付公有云与私有云，为用户提供一致的云平台使用体验。</span
                    >
                </div>
                <div class="u-item u-column">
                    <img class="u-img" src="../../static/images/index/solution/i2.png" alt="" />
                    <span class="u-title">云网深度融合</span>
                    <span class="u-desc"
                        >提供丰富的组网模式，用户通过东云控制台即可完成不同网络接入方案的配置，轻松构建混合云。</span
                    >
                </div>
                <div class="u-item u-column">
                    <img class="u-img" src="../../static/images/index/solution/i3.png" alt="" />
                    <span class="u-title">显著降低成本</span>
                    <span class="u-desc"
                        >采用公有云+托管云的混合云模式，三年总支出成本减少40%以上，最大限度地提高财务收益。</span
                    >
                </div>
                <div class="u-item u-column">
                    <img class="u-img" src="../../static/images/index/solution/i4.png" alt="" />
                    <span class="u-title">统一管理界面</span>
                    <span class="u-desc"
                        >通过统一的多云管理平台对接各类云平台的API，让用户在一个界面下，管理多套异构资源。</span
                    >
                </div>
            </div>
        </div>
        <div class="m-box wp" id="tab4">
            <h3>客户案例</h3>
            <div class="u-box">
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m1.png" alt="" />
                </a>
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m2.png" alt="" />
                </a>
                <a href="http://" target="_blank" class="u-link">
                    <img src="../../static/images/index/solution/m3.png" alt="" />
                </a>
            </div>
        </div>
        <div class="m-goBack">
            <a href="#top" >返回顶部 →</a>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
export default {
    name: "MixTiktok",
};
</script>

<style lang="less">
@import "~@/assets/css/solution.less";
</style>

<style lang="less">
.m-solution {
    h3 {
        .mb(30px);
    }
    .m-example {
        .flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        .m-imgBox {
            flex-shrink: 0;
            .w(710px);
            .x;
            .pr;
        }
        .m-infoBox {
            .flex;
            flex-direction: column;
            gap: 20px;
            .u-title {
                .fz(24px,1);
            }
            .u-item {
                .flex;
                .fz(18px,2);
                .color(#7488a4);
                gap: 14px;
                i {
                    flex-shrink: 0;
                    .size(16px);
                    .mt(10px);
                    .r(50%);
                }
            }
        }
    }
}

.yellow {
    background-color: #ffe581;
}
.blue {
    background-color: #a7b6f3;
}
.purple {
    background-color: #e2c0fe;
}
.green {
    background-color: #70dad4;
}
</style>
