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
                        <a href="mailto:contact@easticloud.com" class="u-contact"><i
                                class="el-icon-message"></i>contact@easticloud.com</a>
                    </div>
                </div>
                <div class="m-map">
                    <baidu-map class="u-map" :center="center" :zoom="zoom" ak="Ew6p8zLR26m3UX3cu4ibtwUGqwprCmZI">
                        <baidu-map-marker :position="{ lng: 118.726879, lat: 31.997976 }"></baidu-map-marker>
                        <BaiduMapOverlay pane="labelPane" class="m-address" @draw="draw">
                            <div class="u-logo">
                                <img src="../../static/images/index/contact/logo.svg" alt="江苏东云互联网络科技有限公司">
                            </div>
                            <div class="u-info">
                                <span class="u-title">江苏东云互联网络科技有限公司</span>
                                <span>江苏省南京市建邺区江东中路359号国睿大厦1号楼B座16层</span>
                            </div>
                        </BaiduMapOverlay>
                    </baidu-map>
                </div>
            </div>
            <div class="m-info-box" id="tab2">
                <h3>在线留言</h3>
                <div class="m-form">
                    <div class="m-item m-row" @click="onFocus('name')">
                        <span class="u-label">联系人</span>
                        <div class="u-input" :class="[active == 'name' ? 'active' : '', rules.name.isErr ? 'err' : '']">
                            <i class="el-icon-user"></i>
                            <input type="text" v-model="form.name" placeholder="请填写您的名称（称呼）" />
                        </div>
                        <span class="u-err" v-if="rules.name.isErr">{{ rules.name.value }}</span>
                    </div>
                    <div class="m-item m-row" @click="onFocus('phone')">
                        <span class="u-label">联系电话</span>
                        <div class="u-input"
                            :class="[active == 'phone' ? 'active' : '', rules.phone.isErr ? 'err' : '']">
                            <i class="el-icon-mobile-phone"></i>
                            <span class="u-desc">+86</span>
                            <input type="text" v-model="form.phone" placeholder="请填写您的联系电话" />
                        </div>
                        <span class="u-err" v-if="rules.phone.isErr">{{ rules.phone.value }}</span>
                    </div>
                    <div class="m-item m-row" @click="onFocus('email')">
                        <span class="u-label">联系邮箱</span>
                        <div class="u-input"
                            :class="[active == 'email' ? 'active' : '', rules.email.isErr ? 'err' : '']">
                            <i class="el-icon-message"></i>
                            <input type="text" v-model="form.email" placeholder="请填写您的邮箱地址" />
                        </div>
                        <span class="u-err" v-if="rules.email.isErr">{{ rules.email.value }}</span>
                    </div>
                    <div class="m-item m-row" @click="onFocus('addr')">
                        <span class="u-label">联系地址</span>
                        <div class="u-input" :class="[active == 'addr' ? 'active' : '', rules.addr.isErr ? 'err' : '']">
                            <i class="el-icon-map-location"></i>
                            <input type="text" v-model="form.addr" placeholder="请填写您的联系地址" />
                        </div>
                        <span class="u-err" v-if="rules.addr.isErr">{{ rules.addr.value }}</span>
                    </div>
                    <div class="m-item m-row" @click="onFocus('content')">
                        <span class="u-label">留言内容</span>
                        <div class="u-textarea"
                            :class="[active == 'content' ? 'active' : '', rules.content.isErr ? 'err' : '']">
                            <i class="el-icon-chat-dot-square"></i>
                            <textarea v-model="form.content" placeholder="请填写您的具体需求"></textarea>
                        </div>
                        <span class="u-err" v-if="rules.content.isErr">{{ rules.content.value }}</span>
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
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BaiduMapMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BaiduMapOverlay from 'vue-baidu-map/components/overlays/Overlay.vue'
export default {
    name: "ContactPage",
    components: {
        BaiduMap,
        BaiduMapMarker,
        BaiduMapOverlay
    },
    data: function () {
        return {
            form: {
                name: "",
                phone: "",
                email: "",
                addr: "",
                content: "",
            },
            rules: {
                name: {
                    isErr: false,
                    value: "请填写您的名称（称呼）"
                },
                phone: {
                    isErr: false,
                    value: "请填写您的联系电话"
                },
                email: {
                    isErr: false,
                    value: "请填写您的邮箱地址"
                },
                addr: {
                    isErr: false,
                    value: "请填写您的联系地址"
                },
                content: {
                    isErr: false,
                    value: "请填写您的具体需求"
                },
            },
            active: "",

            center: { lng: '118.726879', lat: '31.997976' },
            zoom: 16,
        };
    },
    watch: {},
    methods: {
        onFocus (key) {
            this.active = key;
        },
        checkForm (form) {
            Object.keys(form).forEach(key => {
                if (form[key]) {
                    this.rules[key].isErr = false

                    // 判断手机号
                    const phoneReg = /^1[34578]\d{9}$/g
                    if (key == 'phone' && !phoneReg.test(form[key])) {
                        this.rules['phone'].isErr = true
                        this.rules['phone'].value = '请填写正确的手机号码'
                    }

                    // 判断邮箱
                    const emailReg = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,6})$/g
                    if (key == 'email' && !emailReg.test(form[key])) {
                        this.rules['email'].isErr = true
                        this.rules['email'].value = '请填写正确的邮箱地址'
                    }

                    // 判断地址
                    if (key == 'addr' && form[key].length < 8) {
                        this.rules['addr'].isErr = true
                        this.rules['addr'].value = '请填写具体的联系地址'
                    }

                    // 判断地址
                    if (key == 'content' && form[key].length < 20) {
                        this.rules['content'].isErr = true
                        this.rules['content'].value = '请填写详细的需求，不少于20个字'
                    }
                } else {
                    this.rules[key].isErr = true
                }
            })
        },

        onReset () {
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

        onSubmit () {
            this.checkForm(this.form)
            const isSubmit = Object.values(this.rules).map(item => item.isErr).filter(Boolean);
            console.log(isSubmit)
            !isSubmit.length &&
                createMessage(this.form).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "留言成功",
                        type: "success",
                    });
                    this.onReset();
                });
        },
        // 地图标签定位
        draw ({ el, BMap, map }) {
            const pixel = map.pointToOverlayPixel(new BMap.Point(118.726679, 31.998076))
            el.style.left = pixel.x - 124 + 'px'
            el.style.top = pixel.y - 142 + 'px'
        }
    },
};
</script>
<style lang="less">
@import "~@/assets/css/contact.less";
</style>
