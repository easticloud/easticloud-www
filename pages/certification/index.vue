<template>
    <div class="p-certification" id="top">
        <common-header></common-header>
        <div class="m-header">
            <div class="u-txt wp">
                <h2>关于我们</h2>
                <p class="u-desc">
                    东云是一家技术领先的企业级云服务商与数字化解决方案提供商，通过无缝打通公有云和私有云，交付一致功能与体验的混合云，构建起端到端的云原生解决方案。
                </p>
            </div>
        </div>
        <div class="wp">
            <div class="m-tabs">
                <a href="#tab1" class="u-tab active">重要荣誉</a>
                <a href="#tab2" class="u-tab">重要资质</a>
                <a href="#tab3" class="u-tab">国产化认证</a>
                <a href="#tab4" class="u-tab">权威榜单</a>
            </div>

            <div class="m-info-box" id="tab1">
                <h3>重要荣誉</h3>
                <div class="m-content">
                    <div class="m-item">
                        <img src="../../static/images/index/certification/01.png" alt="中华人民共和国工信部" class="u-img">
                        <span>云计算最具影响力企业奖； </span>
                        <span>云计算优秀解决方案奖/产品奖；</span>
                        <span>推动云计算行业发展突出贡献单位奖；</span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/02.png" alt="中国通信院" class="u-img">
                        <span>可信云容器类技术创新奖； </span>
                        <span>可信云网络类 SDN 技术创新奖；</span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/03.png" alt="Forbes" class="u-img">
                        <span>中国最具创新力企业 </span>
                    </div>
                </div>
            </div>
            <div class="m-info-box" id="tab1">
                <h3>重要资质</h3>
                <div class="m-content">
                    <div class="m-item">
                        <img src="../../static/images/index/certification/04.png" alt="ITSS" class="u-img">
                        <span>中国电子工业标准化技术协会 ITSS®;</span>
                        <span> 云计算服务能力标准符合性证书（一级）; </span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/05.png" alt="ISO 9001" class="u-img">
                        <span>ISO 9001 质量管理体系认证 </span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/06.png" alt="ISO 27001" class="u-img">
                        <span>ISO 27001 信息安全管理体系认证 </span>
                    </div>
                </div>
            </div>
            <div class="m-info-box" id="tab1">
                <h3>国产化认证</h3>
                <div class="m-content">
                    <div class="m-item">
                        <img src="../../static/images/index/certification/07.png" alt="飞腾" class="u-img">
                        <span>东云云平台及桌面云、 KubeSphere 容器平台、数据库已完成与飞腾国产处理器及相关服务器的兼容适配</span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/08.png" alt="人大金仓" class="u-img">
                        <span>青云QingCloud 云平台、青立方易捷版已完成与人大金仓数据库的兼容适配</span>
                    </div>
                    <div class="m-item">
                        <img src="../../static/images/index/certification/09.png" alt="GBASE" class="u-img">
                        <span>东云云平台、青立方易捷版已完成与南大通用数据库的兼容适配</span>
                    </div>
                </div>
            </div>
            <div class="m-info-box" id="tab1">
                <h3>权威榜单</h3>
                <div class="m-content m-rank">
                    <div class="m-item">
                        <span>2021年</span>
                        <span class="u-txt">入选“中国技术品牌影响力企业”</span>
                    </div>
                    <div class="m-item">
                        <span>2021年</span>
                        <span class="u-txt">云计算产业领军企业</span>
                    </div>
                    <div class="m-item">
                        <span>2021年</span>
                        <span class="u-txt">卓越云服务商 TOP 10</span>
                    </div>
                    <div class="m-item">
                        <span>2021年</span>
                        <span class="u-txt">科技风云榜-年度最具潜力创业公司</span>
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
export default {
    name: "CertificationPage",
};
</script>

<style lang="less">
@import "~@/assets/css/certification.less";
</style>
