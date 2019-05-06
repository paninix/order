<template>
  <div class="pages-login">
    <section class="login-bg">
    </section>
    <section class="login-log">
        <img src="../../assets/imgs/log.png" alt="">
    </section>
    <section class="login-content">
        <group>
            <form>
                <x-input v-model="user.phone" placeholder="请输入手机号"></x-input>
                <x-input type="password" v-model="user.password" placeholder="请输入密码"></x-input>
                <x-input v-show="isRegister" v-model="sheet.selected" placeholder="请选择账号类型" :show-clear='false' @on-focus="sheet.isShow=true"></x-input>
                <x-button :gradients="['#1D62F0', '#19D5FD']" :disabled="inputFormat" @click.native="login">{{isRegister?'注册':'登录'}}</x-button>           
            </form>
        </group>
        <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeStatus"></actionsheet>
        <div class="brief" @click="isRegister = !isRegister"><span>{{isRegister?'去登录':'去注册'}}</span></div>
    </section>
  </div>
</template>

<script>
import userCache from '@/axios/user/cache';
import {Group, XButton, XInput, Actionsheet} from 'vux';
export default {
    name: 'pages-login',
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
                status: 0    // 1为用户 2为商家 3为骑手
            },
            sheet: {
                isShow: false,
                selected: '',
                menus: {
                    1: '用户',
                    2: '商家',
                    3: '骑手'
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
        // 改变账号类型
        changeStatus(index, value) {
            this.user.status = index;
            this.sheet.selected = value;
        },
        // 登录&注册
        login() {
            // 注册
            if(this.isRegister){
                userCache.register(this.user)
                .then(res=>{
                    this.$vux.toast.text(res.msg);
                    this.saveGlobalDatas(this.user.status);
                    this.$router.push('/guide');
                }).catch(err=>{
                    this.$vux.toast.text(err.msg);
                });
            } else { // 登录
                delete this.user.status;
                userCache.login(this.user)
                .then(res=>{
                    this.$vux.toast.text(res.msg);
                    this.saveGlobalDatas(res.data);
                    let path = ['/customer', '/seller', '/taker'][res.data-1];
                    this.$router.push(path);
                }).catch(err=>{
                    this.$vux.toast.text(err.msg);
                });
            }
        },
        // 存储登录信息
        saveGlobalDatas(status) {
            let globalDatas = {
                status,
                phone: this.user.phone
            };
            this.$store.dispatch('userGlobalInit', globalDatas);
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/common.scss';
    .login-bg {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        // background: url('../../assets/imgs/bg.jpg') no-repeat;
        background-size: cover;
    }
    .login-log {
        text-align: center;
        img {
            width: auto;
        }
    }
    .login-content {
        padding-left: 10vw;
        padding-right: 10vw;
        .brief {
            margin-top: 2vw;
            text-align: right;
            font-size: 14px;
            color: #03A9F4;
        }
        .weui-btn {
            &_disabled {
                opacity: .6;
            }
            &:active {
                opacity: .8;
            }
        }
    }
    
</style>

