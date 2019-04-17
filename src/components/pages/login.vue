<template>
  <div class="login">
    <section class="login-log">
        <img src="../../assets/imgs/log.png" alt="">
    </section>
    <section class="login-content">
        <group>
            <form>
                <x-input type="tel" v-model="user.phone" placeholder="请输入手机号" @on-click-clear-icon.native="console.log(22222)"></x-input>
                <x-input type="password" v-model="user.password" placeholder="请输入密码"></x-input>
                <x-input v-show="isRegister" v-model="sheet.selected" placeholder="请选择账号类型" :show-clear='false' @on-focus="sheet.isShow=true"></x-input>
                <x-button :disabled="inputFormat" @click.native="login">{{isRegister?'注册':'登录'}}</x-button>
            </form>
        </group>
        <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeIdentity"></actionsheet>
        <div class="brief" @click="isRegister = !isRegister"><span>{{isRegister?'去登录':'去注册'}}</span></div>
    </section>
  </div>
</template>

<script>
import userCache from '@/axios/user/cache';
import {Group, XButton, XInput, Actionsheet} from 'vux';
export default {
    components: {
        Group,
        XButton,
        XInput,
        Actionsheet
    },
    data(){
        return {
            user: {
                phone: '',
                password: '',
                identity: 0    // 0为用户 1为商家 2为骑手
            },
            sheet: {
                isShow: false,
                selected: '',
                menus: {
                    0: '用户',
                    1: '商家',
                    2: '骑手'
                }
            },
            isRegister: false,    // false为登录 true为注册
        }
    },
    computed: {
        inputFormat() {
            if(/^1(3|4|5|7|8)\d{9}$/.test(this.user.phone) && this.user.password) {
                if(this.isRegister) {
                    return this.sheet.selected ? false : true;
                }
            } else {
                return true;
            }
        }
    },
    methods: {
        changeIdentity(index, value) {
            this.user.identity = index;
            this.sheet.selected = value;
        },
        // 登录&注册
        login() {
            console.log(this.user);
            // 注册
            if(this.isRegister){
                userCache.register(this.user)
                .then(res=>{
                    this.$vux.toast.text(res.msg)
                }).catch(err=>{
                    this.$vux.toast.text(err.msg)
                });
            } else { // 登录
                delete this.user.identity;
                userCache.login(this.user)
                .then(res=>{
                    this.$vux.toast.text(res.msg)
                    console.log(res);
                }).catch(err=>{
                    this.$vux.toast.text(err.msg)
                });
            }
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
    .login {
        &-log {
            text-align: center;
        }
        &-content {
            padding-left: 10%;
            padding-right: 10%;
            .brief {
                margin-top: 10px;
                text-align: right;
                font-size: 14px;
                color: #969799;
            }
        }
        .weui-btn {
            color: #fff;
            background-color: #FFC107;
            &_disabled {
                opacity: .6;
            }
        }
    }
</style>

