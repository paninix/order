<template>
  <div class="login">
     <button @click="login">登录</button>
  </div>
</template>

<script>
import userCache from '@/axios/user/cache';
export default {
    data(){
        return {

        }
    },
    methods: {
        login() {
            userCache.userLogin({
                username: 'xgb',
                password: '1111'
            }).then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/adapt.scss';
    .login {
        font-size: rem(20px);
    }
</style>

