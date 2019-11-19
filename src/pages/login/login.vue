<template>
    <div class="login_wrap" ref="login_wrap">
        <!--        <img class="login_top_bg" src="@/assets/images/login/saas_login_img_bg.png" alt="">-->
        <div class="login_info">
            <img class="login_info_logo" src="@/assets/images/login/img_logo.png" alt="">

            <van-field v-model.trim="loginName" type="tel" placeholder="请输入手机号" maxlength="11" class="login_input input_border_none white"
                       clearable @keyup.enter.native="handleClick"/>

            <van-field v-model.trim="loginPwd" type="number" maxlength="6" placeholder="请输入验证码"
                       class="login_input input_border_none white" clearable @keyup.enter.native="handleClick">
                <van-button class="btn-code" slot="button" size="small" type="primary" color="rgba(0,0,0,0)" @click="getVerifyCodeClick" :disabled=disabled>{{btnCodeText}}</van-button>
            </van-field>

            <van-button size="large" type="info" class="bg_blue_color" :loading="loading" @click.native="handleClick">
                登录
            </van-button>
        </div>
        <p class="login_footer">@2005-2019 礼舍科技 版权所有</p>
    </div>
</template>

<script>
    import {setStore, removeStore} from '@/utils/storageUtil'

    export default {
        name: "login",
        data() {
            return {
                loginName: "",
                loginPwd: "",
                loading: false,
                currentTime: 60,
                btnCodeText: "获取验证码",
                disabled: false
            }
        },
        created() {
            console.log(process.env.VUE_APP_BASE_URL);
            removeStore('token');
        },
        methods: {
            handleClick() {
                var self = this;
                if (!this.loginName) {
                    this.$toast('请输入手机号');
                    return;
                } else if (!this.loginPwd) {
                    this.$toast('请输入验证码');
                    return;
                } else {
                    this.$toast.loading({
                        duration: 0,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'spinner',
                        message: '数据加载中'
                    });
                    lisheJSON(process.env.VUE_APP_BASE_URL + "friend.Login.msgCodeLogin?callback=?", {
                        phone_num : this.loginName,
                        code : this.loginPwd
                    }, function (res) {
                        self.$toast.clear();
                        if (res.errcode == 0) {
                            if (hasValue(res.data.token)) {
                                //存贮token
                                setStore('token', res.data.token);
                                self.loadPage({path: '/'});
                            }
                        }else {
                            self.$toast(res.msg);
                        }
                    })
                }
            },

            // 获取验证码
            getVerifyCodeClick(){
                var self = this;
                this.$toast.loading({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '数据加载中'
                });
                var phoneNum = this.loginName;
                var mobileCode=/^1\d{10}$/;
                if (phoneNum == '') {
                    this.$toast.clear();
                    self.$toast("请填写手机号码！");
                    return false;
                }
                if(!mobileCode.test(phoneNum)){
                    this.$toast.clear();
                    self.$toast("手机号码格式不正确！");
                    return false;
                }
                if (phoneNum.length != 11) {
                    this.$toast.clear();
                    self.$toast("手机号码格式不正确！");
                    return false;
                }

                var ruleCode = parseInt(phoneNum.substring(7,11).split('').reverse().join(''))+1;
                lisheJSON(URL_GetCode + "?callback=?", { regPhoneNum : phoneNum,ruleCode:ruleCode }, function (result) {
                    debug(result);
                    self.$toast.clear();
                    if (result.errcode == 0) {
                        var interval=null;
                        self.disabled = true;
                        self.btnCodeText = "60秒后重发";
                        var time = 60;
                        interval = setInterval(function () {
                            time--;
                            self.btnCodeText = time+ '秒后重发';

                            if (time <= 0) {
                                clearInterval(interval)
                                self.disabled = false;
                                self.btnCodeText = "发送验证码";
                            }
                        }, 1000);
                    }else if (result.errcode == -1) {
                        self.$toast('发送验证码失败，请稍后重试');
                    }else{
                        self.$toast(result.msg);
                        return false;
                    }
                });
            },

        }
    }
</script>

<style scoped lang="scss">
    .bg_blue_color {
        user-select: none;
        background-color: $blue;
        border-color: $blue;
        line-height: 0.88rem;
        height: 0.88rem;
        font-size: 0.32rem;
        border-radius: 0.1rem;
    }

    .login_wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 8rem;
        background: url("../../assets/images/login/saas_login_img_bg.png") 0 0 no-repeat;
        background-size: 100% 100%;
        padding-top: 2.7rem;
        box-sizing: border-box;
        overflow: auto;

        .login_top_bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 0;
            z-index: 0;
        }

        .login_info {
            padding: 0 0.95rem;

            .login_info_logo {
                font-size: 0;
                display: block;
                width: 5.46rem;
                margin: 0 auto 1.78rem;
            }

            .login_input {
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 0.1rem;
                margin-bottom: 0.32rem;
                padding: 0.25rem;

                &:nth-of-type(2) {
                    margin-bottom: 0.8rem;
                }

                .sep{
                    width: 0.1rem;
                    height: 0.32rem;
                    background-color: lightpink;
                }


                .btn-code{
                    font-size: 0.28rem;
                }
            }

            .forget_password {
                padding: 0.4rem 0;
                text-align: center;
                font-size: 0;

                & > a {
                    color: #ffffff;
                    font-size: 0.24rem;
                }
            }
        }

        .login_footer {
            user-select: none;
            width: 100%;
            text-align: center;
            font-size: 0.22rem;
            color: #ffffff;
            line-height: 0.8rem;
            position: absolute;
            bottom: 0.1rem;
        }
    }
</style>
<style>
    .login_wrap .login_input input {
        font-size: 0.32rem;
        line-height: 0.5rem;
    }

    .van-field__button{
        border-left: 1px solid #E5e5e5;
    }
</style>
