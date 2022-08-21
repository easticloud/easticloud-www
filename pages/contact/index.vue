<template>
    <div class="p-contact">
        <common-header></common-header>
        <div class="m-header">
            <div class="u-txt wp">
                <h2>联系我们</h2>
                <p class="u-desc">
                    我们致力于为您提供个性化的售前购买咨询服务，及全面的技术售后服务，任何问题请联系我们。
                </p>
            </div>
        </div>
        <div class="wp">
            <div class="m-tabs">
                <a href="#tab1" class="u-tab active">联系我们</a>
                <a href="#tab2" class="u-tab">在线留言</a>
            </div>
            <div class="m-info-box" id="tab1">
                <h3>联系我们</h3>
                <div class="m-box">
                    <div class="u-item u-pre">
                        <h4>售前咨询</h4>
                        <span class="u-desc">法定工作日：9:00-18:00</span>
                        <span class="u-contact"><i class="el-icon-phone"></i>025-82229268</span>
                    </div>
                    <div class="u-item u-after">
                        <h4>售后咨询</h4>
                        <span class="u-desc">开发技术支持、个性化产品培训</span>
                        <a href="mailto:contact@easticloud.com" class="u-contact"
                            ><i class="el-icon-message"></i>contact@easticloud.com</a
                        >
                    </div>
                </div>
                <div class="m-map">
                    <img
                        class="u-img"
                        src="../../static/images/index/contact/map.png"
                        alt="江苏东云互联网络科技有限公司"
                    />
                </div>
            </div>
            <div class="m-info-box" id="tab2">
                <h3>在线留言</h3>
                <div class="m-form">
                    <div class="m-item m-row" @click="onFocus('name')">
                        <span class="u-label">联系人</span>
                        <div class="u-input" :class="[active == 'name' ? 'active' : '', checkForm(form.name)]">
                            <i class="el-icon-user"></i>
                            <input type="text" v-model="form.name" placeholder="请输入您的名称（称呼）" />
                        </div>
                    </div>
                    <div class="m-item m-row" @click="onFocus('phone')">
                        <span class="u-label">联系电话</span>
                        <div class="u-input" :class="[active == 'phone' ? 'active' : '', checkForm(form.phone)]">
                            <i class="el-icon-mobile-phone"></i>
                            <span class="u-desc">+86</span>
                            <input type="text" v-model="form.phone" placeholder="请输入您的电话号码" />
                        </div>
                    </div>
                    <div class="m-item m-row" @click="onFocus('email')">
                        <span class="u-label">联系邮箱</span>
                        <div class="u-input" :class="[active == 'email' ? 'active' : '', checkForm(form.email)]">
                            <i class="el-icon-message"></i>
                            <input type="text" v-model="form.email" placeholder="请输入您的邮箱号码" />
                        </div>
                    </div>
                    <div class="m-item m-row" @click="onFocus('addr')">
                        <span class="u-label">联系地址</span>
                        <div class="u-input" :class="[active == 'addr' ? 'active' : '', checkForm(form.addr)]">
                            <i class="el-icon-map-location"></i>
                            <input type="text" v-model="form.addr" placeholder="请输入您的联系地址" />
                        </div>
                    </div>
                    <div class="m-item m-row" @click="onFocus('content')">
                        <span class="u-label">留言内容</span>
                        <div class="u-textarea" :class="[active == 'content' ? 'active' : '', checkForm(form.content)]">
                            <i class="el-icon-chat-dot-square"></i>
                            <textarea v-model="form.content" placeholder="请输入您详细的需求内容"></textarea>
                        </div>
                    </div>
                </div>
                <div class="m-btns">
                    <span class="u-btn u-reset" @click="onReset">重新输入</span>
                    <span class="u-btn u-submit" @click="onSubmit">提交内容</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createMessage } from "@/utils/api.js";
export default {
    name: "ContactPage",
    data: function () {
        return {
            form: {
                name: "",
                phone: "",
                email: "",
                addr: "",
                content: "",
            },
            active: "",
            isCheck: false,
        };
    },
    computed: {},
    watch: {},
    methods: {
        onFocus(key) {
            this.active = key;
        },
        checkForm(val) {
            if (this.isCheck && !val) return "err";
        },
        onReset() {
            this.form = {
                name: "",
                phone: "",
                email: "",
                addr: "",
                content: "",
            };
            this.active = "";
            this.isCheck = false;
        },
        onSubmit() {
            const arr = Object.values(this.form).filter(Boolean);
            this.isCheck = arr.length === 5 ? false : true;
            !this.isCheck &&
                createMessage(this.form).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "留言成功",
                        type: "success",
                    });
                    this.onReset();
                });
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/contact.less";
</style>
