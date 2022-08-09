<template>
    <div class="m-datacenter">
        <div class="wp">
            <h3 class="m-datacenter-header m-title">
                <span class="u-title">数据中心</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-datacenter-content">
                <div class="m-area">
                    <span class="u-area" v-for="(item, i) in area" :key="i"
                        ><b>{{ item.name }}</b
                        >数据中心 {{ item.num }}个</span
                    >
                </div>
                <img class="u-map" src="/images/index/map.svg" />
                <div class="m-info">
                    <div class="u-info">
                        <span class="u-title"><b>1000</b>+</span>
                        <span>全球CDN节点</span>
                    </div>
                    <div class="u-info">
                        <span class="u-title"><b>35</b>+</span>
                        <span>覆盖大陆地区</span>
                    </div>
                    <div class="u-info">
                        <span class="u-title"><b>1</b>Tbps</span>
                        <span>可承载DDos</span>
                    </div>
                    <div class="u-info">
                        <span class="u-title"><b>3</b></span>
                        <span>清洗中心</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            area: [
                { name: "武汉", num: 2 },
                { name: "南京", num: 4 },
                { name: "苏州", num: 3 },
                { name: "北京", num: 2 },
                { name: "上海", num: 4 },
                { name: "广州", num: 3 },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
.m-datacenter {
    padding: 60px 0;
    background-color: #fafbff;
    .m-datacenter-content {
        .pt(30px);
        .m-area {
            .flex;
            justify-content: space-between;
            .u-area {
                .fz(14px,28px);
                b {
                    background: #4162eb;
                    padding: 2px 3px;
                    .r(3px);
                    .mr(10px);
                    .fz(16px,28px);
                    .color(#fff);
                }
            }
        }
        .u-map {
            .db;
            .auto(x);
            max-width: 90%;
        }
        .m-info {
            .flex;
            .auto(x);
            .pt(20px);
            width: 600px;
            justify-content: space-between;
            .u-info {
                .flex;
                flex-direction: column;
                align-items: center;
                .u-title {
                    .color(#4162eb);
                    .fz(28px);
                    b {
                        .bold;
                        .fz(36px,50px);
                    }
                }
            }
        }
    }
}
</style>
