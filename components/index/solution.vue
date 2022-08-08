<template>
    <div class="m-solution">
        <div class="wp">
            <h3 class="m-solution-header m-title">
                <span class="u-title">解决方案</span>
                <img class="u-logo" src="@/assets/img/icon.svg" alt="东云科技" />
            </h3>
            <div class="m-solution-content">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    title: "混合云解决方案",
                    desc: "通过私有云+公有云的部署模式，能将用户私有云业务和公有云业务无缝联接，实现资源的灵活调度。同时，可以将用户孤岛化、碎片化的 IT 资源通过公有云无缝连接起来，实现所有 IT 资源的互联互通。",
                    href: "",
                    src: "/images/index/solution/1.png",
                },
                {
                    title: "抖音国际版Tiktok",
                    desc: "抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。",
                    href: "",
                    src: "/images/index/solution/2.png",
                },
            ],
        };
    },
    async asyncData({ params }) {
        return {};
    },
};
</script>

<style lang="less">
.m-solution {
    padding: 60px 0;
}
</style>
