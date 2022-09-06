<template>
    <div class="p-production" id="top">
        <div class="wp">
            <common-header class="theme-light"></common-header>
            <div class="m-production-box m-servers">
                <h2>裸金属服务器</h2>
                <p class="u-desc">
                    弹性裸金属服务器(Bare
                    Metal)，提供高性能、资源独享、安全隔离的专属弹性裸金属服务器，同时具备云资源的敏捷性、灵活性与高可用。满足各类应用对高性能及稳定性的需求，同时提供完整的设备管理权限及运维服务。
                </p>
                <div class="m-btn">
                    <a class="u-btn" href="/contact" target="_blank">立即使用</a>
                    <a class="u-btn u-price" href="/contact" target="_blank">产品价格</a>
                </div>
            </div>

            <div class="m-tabs">
                <a href="#tab1" class="u-tab active">产品优势</a>
                <a href="#tab2" class="u-tab">产品功能</a>
                <a href="#tab3" class="u-tab">产品类型</a>
                <a href="#tab4" class="u-tab">应用场景</a>
            </div>
            <div class="m-info-box" id="tab1">
                <h3><i>▶</i> 产品优势</h3>
                <p class="u-section">
                    <strong>1、极致性能，承载企业核心业务</strong>
                    <span
                        >独享物理隔离的硬件资源，释放极致性能，匹配 VPC 网络赋予的完整控制能力，
                        满足核心业务对性能、可靠性及安全合规的极致需求。</span
                    >
                </p>
                <p class="u-section">
                    <strong>2、高效的资源交付</strong>
                    <span
                        >10 分钟完成 OS
                        部署上线，自动化配置，秒级操作响应，兼容所有云服务器系统镜像及用户自有镜像，助您轻松完成基础架构部署。</span
                    >
                </p>
                <p class="u-section">
                    <strong>3、灵活简便的使用体验</strong>
                    <span
                        >支持弹性伸缩、按需秒级计费及API
                        自动化管理，赋予弹性裸金属服务器弹性、灵活与敏捷的云端特性。</span
                    >
                </p>
                <p class="u-section">
                    <strong>4、支持云应用部署</strong>
                    <span
                        >支持将 AppCenter
                        中的云应用直接部署成弹性裸金属服务器，实现面向应用的交付模式，提高业务运维效率。</span
                    >
                </p>
            </div>
            <div class="m-info-box" id="tab2">
                <h3><i>▶</i>产品功能</h3>
                <p class="u-section">
                    <strong>存储</strong>
                    <span
                        >采用基于 NVMe-oF 的分布式存储，按需使用，磁盘可弹性扩容，最高 32T*20 的存储空间，最高可支持
                        200k iops。</span
                    >
                </p>
                <p class="u-section">
                    <strong>网络</strong>
                    <span>提供极高性能网络连接：时延低至25μs，吞吐量可达 40G ，最高20Mpps。</span>
                </p>
                <p class="u-section">
                    <strong>运维</strong>
                    <span
                        >支持通过自动运维大幅减少人工干预，提供基于novnc 的 Web Terminal
                        进行日常管理运维，支持快速救援系统。</span
                    >
                </p>
                <p class="u-section">
                    <strong>监控</strong>
                    <span
                        >提供与云服务器相同的全维度资源监控，包括 CPU、内存、硬盘使用率、硬盘
                        IOPS、网络带宽、网络转发率等。</span
                    >
                </p>
            </div>
            <div class="m-info-box" id="tab3">
                <h3><i>▶</i>产品类型</h3>
                <p class="u-section">
                    <strong>物理主机目前提供以下四种类型的硬件配置</strong>
                    <span><img src="../../static/images/index/production/hardware.png" alt="" /></span>
                </p>
            </div>
            <div class="m-info-box" id="tab4">
                <h3><i>▶</i>应用场景</h3>
                <p class="u-section">
                    <strong>企业核心业务托管</strong>
                    <span
                        >承载企业核心应用的 IT
                        系统对性能、服务可靠性及数据安全合规有着苛刻的要求，一般通过本地独立部署的物理架构实现。
                        物理主机服务通过托管 (企业自主采购服务器)
                        或租用的形式，为用户提供资源专享、网络隔离、同时性能有保障的物理主机机组，在满足高性能的同时，兼顾用户对安全合规和运维保障上的诸多需求。</span
                    >
                </p>
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
    name: "ProductionServers",
};
</script>

<style lang="less">
@import "~@/assets/css/production.less";
</style>
