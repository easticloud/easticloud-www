<template>
    <div class="p-production p-page" id="top">
        <div class="wp">
            <common-header class="theme-light"></common-header>
            <div class="m-header m-international">
                <h2>TikTok 一站式营销解决方案</h2>
                <p class="u-desc u-first">低成本启动 亿级流量引爆品牌海外口碑</p>
                <p class="u-desc">快人一步抢占营销红利 持续获取高质询盘</p>
            </div>
            <div class="m-getting">
                <input class="u-input" type="txt" v-model="name" placeholder="请输入您的姓名" />
                <input class="u-input" type="txt" v-model="phone" placeholder="请输入手机号" />
                <span class="u-btn" @click="omSubmit">获取方案</span>
            </div>
            <div class="m-info-box">
                <h3><span>覆盖TikTok全生态服务</span> <span>让品牌和产品一夜爆红</span></h3>
                <div class="m-box">
                    <div class="m-item">
                        <img class="u-img" src="../../static/images/index/production/1.png" alt="定制化品牌全案" />
                        <div class="u-txt">
                            <span class="u-title">定制化品牌全案</span>
                            <span>创意设计服务全案定制 </span>
                            <span>一站式海外短视频营销</span>
                            <span>打造品牌与受众双向互动</span>
                            <span>长效关联的营销阵地</span>
                        </div>
                    </div>
                    <div class="m-item">
                        <img class="u-img" src="../../static/images/index/production/2.png" alt="增量广告投放" />
                        <div class="u-txt">
                            <span class="u-title">增量广告投放</span>
                            <span>覆盖200+国家及75种语言 </span>
                            <span>多场景短视频广告投放优化</span>
                            <span>迅速直接转化</span>
                            <span>提高沉淀品牌价值</span>
                        </div>
                    </div>
                    <div class="m-item">
                        <img class="u-img" src="../../static/images/index/production/3.png" alt="一站式KOL直播运营" />
                        <div class="u-txt">
                            <span class="u-title">一站式KOL直播运营</span>
                            <span>直连全球20万+KOL </span>
                            <span>精准匹配契合产品网红</span>
                            <span>病毒式裂变传播+直播</span>
                            <span>对粉丝进行沉浸式种草</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-info-box">
                <h3><span>定向触达全球精准受众</span> <span>量身定制专业海外推广方案</span></h3>
                <div class="m-box">
                    <div class="m-item">
                        <img
                            class="u-img"
                            src="../../static/images/index/production/4.png"
                            alt="一站式全流程开户轻松卖货到全球"
                        />
                        <div class="u-txt">
                            <span class="u-title"
                                >一站式全流程开户<br />
                                轻松卖货到全球</span
                            >
                            <span>免费开户 </span>
                            <span>主页账号搭建</span>
                            <span>TikTok shop运营</span>
                            <span>政策合规审查等</span>
                        </div>
                    </div>
                    <div class="m-item">
                        <img
                            class="u-img"
                            src="../../static/images/index/production/5.png"
                            alt="多维度定制投放策略打造品牌营销新阵地"
                        />
                        <div class="u-txt">
                            <span class="u-title"
                                >多维度定制投放策略<br />
                                打造品牌营销新阵地</span
                            >
                            <span>测试推广网站 </span>
                            <span>产品视频全案定制</span>
                            <span>智能精准定位受众</span>
                            <span>转化路径多场景优化</span>
                        </div>
                    </div>
                    <div class="m-item">
                        <img
                            class="u-img"
                            src="../../static/images/index/production/6.png"
                            alt="以流量转化ROI为导向全流程监测效果优化"
                        />
                        <div class="u-txt">
                            <span class="u-title"
                                >以流量转化ROI为导向<br />
                                全流程监测效果优化</span
                            >
                            <span>品牌力传播分析 </span>
                            <span>品效综合数据报告</span>
                            <span>效果投放数据复盘</span>
                            <span>增加高转化预算</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-goBack">
                <a href="#top">返回顶部 →</a>
            </div>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import { createMessage } from "@/utils/api.js";
export default {
    name: "ProductionInternational",
    data: function () {
        return {
            name: "",
            phone: "",
        };
    },
    methods: {
        checkForm() {
            if (!this.name) return "请填写您的姓名";
            if (!this.phone) return "请填写您的手机号码";
            const phoneReg = /^1[34578]\d{9}$/g;
            if (!phoneReg.test(this.phone)) return "请填写正确的手机号码";
            return "";
        },
        omSubmit() {
            const isCheck = this.checkForm();
            if (isCheck) {
                this.$message({
                    message: isCheck,
                    type: "warning",
                    offset: 300,
                });
            } else {
                const form = {
                    name: this.name,
                    phone: this.phone,
                    content: "获取解决方案",
                };
                createMessage(form)
                    .then(() => {
                        this.$notify({
                            title: "留言成功！",
                            message: "请耐心等待，我们会尽快联系您。",
                            type: "success",
                        });
                    })
                    .finally(() => {
                        this.name = "";
                        this.phone = "";
                    });
            }
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/assets/css/production.less";
</style>
