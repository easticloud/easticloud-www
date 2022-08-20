<template>
    <div class="p-search" id="top">
        <div class="wp">
            <div class="m-search-header">
                <common-header class="theme-light"></common-header>
                <div class="m-search-box">
                    <el-input placeholder="请输入内容" v-model="search">
                        <el-button icon="el-icon-search" slot="prepend" link></el-button>
                    </el-input>
                    <el-button class="u-btn" type="primary">搜索</el-button>
                </div>
            </div>
            <div class="m-search-tabs">
                <a href="" class="u-tab active">全部(3）</a>
                <a href="" class="u-tab">产品(1)</a>
                <a href="" class="u-tab">解决方案(1)</a>
                <a href="" class="u-tab">其他(1)</a>
            </div>
            <div class="m-search-content">
                <div class="m-item" v-for="(item, i) in 4" :key="i">
                    <span class="u-title"><b>TikTok</b>一站式营销解决方案丨东云科技</span>
                    <span
                        class="u-desc">低成本启动，亿级流量引爆海外口碑。快人一步抢占营销红利，持续获取高质量询盘。覆盖<b>TikTok</b>全生态服务，让品牌和产品一夜爆红。定制化品牌全案，创意设计服务全案定制，一站式海外短视频营销，打造品牌与受众双向互动，长效关联的营销阵地。增量广告投放，覆200+国</span>
                </div>
            </div>
        </div>
        <div class="m-contact">
            <span>联系我们，获取更多个性化定制方案</span><a href="http://" target="_blank" class="u-contact">立即咨询</a>
        </div>
        <common-footer></common-footer>
    </div>
</template>
<script>
export default {
    name: "SearchPage",
    data () {
        return {
            search: ''
        }
    }
};
</script>

<style lang="less">
@import "~@/assets/css/search.less";
</style>