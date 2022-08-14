<template>
    <div class="p-production" id="top">
        <common-header class="theme-light"></common-header>
        <div class="wp">
            <div class="m-production-box m-container">
                <h2>Kubernetes 容器服务</h2>
                <p class="u-desc">
                    容器引擎（DCloud Kubernetes
                    EngineE）是云平台上勾线的企业级分布式多租户的Kubernetes容器服务，集成了云平台的云服务器、存储、网络等资源，可一键部署高可用、高性能的Kubernetes集群，支持CI/CD、多集群管理、微服务治理、应用关联、服务与网络管理等业务场景，让您轻松高效地在云端运行Kubernetes容器化应用。
                </p>
                <div class="m-btn">
                    <a class="u-btn" href="http://" target="_blank">立即使用</a>
                    <a class="u-btn u-price" href="http://" target="_blank">产品价格</a>
                </div>
            </div>

            <div class="m-tabs">
                <a href="#tab1" class="u-tab active">产品特性</a>
                <a href="#tab1" class="u-tab">使用场景</a>
            </div>
            <div class="m-info-box" id="tab1">
                <h3><i>▶</i>产品特性</h3>
                <p class="u-section">
                    <strong>1、一键整合基础设施</strong>
                    <span>快速整合计算、存储、网络资源，以标准化的容器形式交付资源。</span>
                </p>
                <p class="u-section">
                    <strong>2、应用全生命周期管理</strong>
                    <span>多引擎、CI/CD等功能助力应用快速迭代，敏捷开发。</span>
                </p>
                <p class="u-section">
                    <strong>3、精细化分配控制</strong>
                    <span>基于多租户，RBAC模型管理资源，完善的审计日志，让所以操作都有迹可循。</span>
                </p>
                <p class="u-section">
                    <strong>4、多维度智能运维</strong>
                    <span>内置监控告警、日志收集模块等帮助企业统一收集、快速检索。</span>
                </p>
                <p class="u-section">
                    <strong>5、和公有云高度集成</strong>
                    <span>和主流公有云厂商数据面以及网络面互通，实现和laaS平台的紧密协作。</span>
                </p>
            </div>
            <div class="m-info-box" id="tab2">
                <h3><i>▶</i>使用场景</h3>
                <p class="u-section">
                    <strong>1、企业快速构建PaaS平台</strong>
                    <span
                        >通过聚合底层异构的基础设施资源，形成统一弹性的资源池，灵活高效的资源调度机制，大幅优化IT资源，满足敏捷开发、快速响应、弹性扩展等需求。</span
                    >
                </p>
                <p class="u-section">
                    <strong>2、复杂架构应用持续交付</strong>
                    <span
                        >全面贯穿应用的整个交付链，大幅提升IT研发体系的管理流程，开发流程以及产品的质量和迭代速度。此类场景针对需要频繁迭代的应用。</span
                    >
                </p>
                <p class="u-section">
                    <strong>3、标准应用交付</strong>
                    <span
                        >对传统应用软件做容器化改造，实现应用的标准化交付流程，支持一键部署、升级、监控及运维，配置文件统一管理。</span
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
    name: "ProductionContainer",
    data() {
        return { index: 1 };
    },
    methods: {
        changeTabs(i) {
            this.index = i;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/production.less";
</style>
