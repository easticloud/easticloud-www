<template>
    <div class="p-production" id="top">
        <div class="wp">
            <common-header class="theme-light"></common-header>
            <div class="m-production-box m-compute">
                <h2>高性能计算 EHPC</h2>
                <p class="u-desc">
                    基于东云云计算的IaaS基础架构，以PaaS结构为基础，为您打造安全、弹性、快捷的高效云上高性能计算平台，能支持计算资源的弹性定制，降低成本，提高资源利用率，具有极大的灵活性。
                </p>
                <div class="m-btn">
                    <a class="u-btn" href="/contact" target="_blank">立即使用</a>
                    <a class="u-btn u-price" href="/contact" target="_blank">产品价格</a>
                </div>
            </div>

            <div class="m-tabs">
                <a href="#tab1" class="u-tab active">产品优势</a>
                <a href="#tab2" class="u-tab">产品特性</a>
                <a href="#tab3" class="u-tab">应用场景</a>
            </div>
            <div class="m-info-box" id="tab1">
                <h3><i>▶</i>产品优势</h3>
                <p class="u-section">
                    <strong>1、高效计算</strong>
                    <span
                        >计算资源采用行业领先高主频的 Intel 6258R 型号 CPU，单核性能达到
                        86.4GFlops，让计算更高性能、更稳定、更可靠。</span
                    >
                </p>
                <p class="u-section">
                    <strong>2、灵活存储</strong>
                    <span>高性能并行文件系统EPFS：Lustre商用版本，分布式并行架构，GB 级吞吐、百万级 IOPS。</span>
                </p>
                <p class="u-section">
                    <strong>3、专用网络</strong>
                    <span
                        >采用专用 IB 网络，计算节点与节点 之间，计算节点与存储之间都能够高速通信，内网带宽达到 100Gbps
                        支持大量文件并行处理，能够带来更高吞吐、更低延迟。</span
                    >
                </p>
            </div>
            <div class="m-info-box" id="tab2">
                <h3><i>▶</i>产品特性</h3>
                <p class="u-section">
                    <strong>1、弹性伸缩，按需配置</strong>
                    <span
                        >基于云平台架构的EHPC集群具备节点动态调整能力，有弹性伸缩的可扩展性能，用户可按需选择计算实例类型，无需排期，即买即用。</span
                    >
                </p>
                <p class="u-section">
                    <strong>2、只管使用，无需运维</strong>
                    <span
                        >用户无需关注EHPC集群本身的设备运维、网络安全、机房故障等一系列运维事件，只需要借助平台提供的运维管理模块实时查看所用资源的运行状态、消费详情和业务执行进展等，省心又放心，可专心做研究。</span
                    >
                </p>
                <p class="u-section">
                    <strong>3、资源租赁，性价比高</strong>
                    <span
                        >集群用户按使用时长支付资源租赁费用，包括计算、存储、网络、软件。节省大量的设备投入和软件采购许可费用，性价比高，超省钱。</span
                    >
                </p>
                <p class="u-section">
                    <strong>4、租户隔离，安全可靠</strong>
                    <span
                        >基于云计算框架和技术的EHPC集群，能够提供多租户隔离机制，可大大提高数据安全性和高可用性。同时提供符合网络安全等级标准的防护措施，有效消除安全隐患。</span
                    >
                </p>
            </div>
            <div class="m-info-box" id="tab3">
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
    name: "ProductionCompute",
};
</script>

<style lang="less">
@import "~@/assets/css/production.less";
</style>
