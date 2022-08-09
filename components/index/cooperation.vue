<template>
    <div class="m-cooperation">
        <div class="wp">
            <h3 class="m-cooperation-header m-title">
                <span class="u-title">合作伙伴</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-cooperation-content">
                <a :href="item.link" class="u-item" v-for="(item, i) in data" :key="i">
                    <img :src="item.image" :alt="item.name" />
                </a>
            </div>
            <div class="m-cooperation-footer">
                <a href="" class="u-more">点击查看更多 →</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { image: "/images/index/cooperation/01-阳光保险.svg", link: "https://www.sinosig.com/", name: "阳光保险" },
                { image: "/images/index/cooperation/02-中国银行.svg", link: "https://www.bankofchina.com/", name: "中国银行"},
                { image: "/images/index/cooperation/03-vipkid.svg", link: "https://www.vipkid.com.cn/", name: "VipKid"  },
                { image: "/images/index/cooperation/04-Electrolux.svg", link: "https://www.electrolux.com.cn/", name: "伊莱克斯" },
                // { image: "/images/index/cooperation/05-昆明航空.svg", link: "https://www.airkunming.com/", name: "昆明航空" },
                { image: "/images/index/cooperation/06-泰康人寿.svg", link: "https://www.taikang.com/", name: "泰康人寿" },
                { image: "/images/index/cooperation/07-招商银行.svg", link: "https://www.cmbchina.com/", name: "招商银行"  },
                { image: "/images/index/cooperation/08-华润怡宝.svg", link: "https://www.crbeverage.com/", name: "华润怡宝" },
                { image: "/images/index/cooperation/09-中国航空.svg", link: "https://www.airchina.com.cn/", name: "中国航空"  },
                { image: "/images/index/cooperation/10-人民网.svg", link: "http://www.people.com.cn/", name: "人民网"},
                // { image: "/images/index/cooperation/11-SENSORO.svg", link: "https://www.sensoro.com/", name: "SENSORO" },
                { image: "/images/index/cooperation/14-江苏交控.svg", link: "https://www.jchc.cn/", name: "江苏交控"},
                { image: "/images/index/cooperation/15-四川航空.svg", link: "https://www.sichuanair.com/", name: "四川航空" },
                { image: "/images/index/cooperation/16-soho中国.svg", link: "https://www.sohochina.com/", name: "soho中国" },
                { image: "/images/index/cooperation/17-本钢.svg", link: "http://www.bxsteel.com/", name: "本钢集团有限公司"},
                { image: "/images/index/cooperation/18-广东交通.svg", link: "http://www.gdcg.com.cn/index.jsp", name: "广东交通集团" },
                { image: "/images/index/cooperation/19-国药.svg", link: "http://www.sinopharm.com/", name: "国药集团"},
                { image: "/images/index/cooperation/20-木棉说.svg", link: "https://www.mmsay.com/", name: "木棉说" },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
.m-cooperation {
    padding: 60px 0;
    background-color: #fafbff;
}
.m-cooperation-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .u-item{
        .flex;
        align-items: center;
        justify-content: center;
        background-color:#fff;
        border:1px solid #E1E6F1;
        margin-left:-1px;
        margin-top:-1px;
        padding:20px 0;
        .x;
    }
}
.m-cooperation-footer{
    .x;
    .pointer;
    .mt(25px);
    .lh(34px);

    .u-more{
        @color:#4162EB;
        .color(@color);
        &:hover{
            box-shadow:0 1px 0 @color;
        }
    }
}
</style>
