<template>
  <div class="pages-guide">
    <divider>请补全下列信息</divider>
    <section class="guide-content" v-show="identity === '1'">
        <group>
             <x-input required :show-clear="false" text-align="right" title="用户名" v-model="customer.username"></x-input>
             <x-input required :show-clear="false" text-align="right" title="我的地址" v-model="customer.address"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="customer.phone"></x-input>
             <x-button type="warn" @click.native="subCustomerBaseInfor">提交</x-button>
        </group>
    </section>
    <section class="guide-content" v-show="identity === '2'">

    </section>
    <section class="guide-content" v-show="identity === '3'">

    </section>
  </div>
</template>

<script>
import customerCache from '@/axios/customer/cache';
import { Group, XButton, XInput, Divider } from 'vux';
export default {
    name: 'pages-guide',
    components: {
        Group,
        XButton,
        XInput,
        Divider
    },
    data(){
        return {
            // 客户端用户
            customer: {
                phone: '',   // 账号（手机号码）
                username: '', // 用户名
                address: '', // 地址
                count: 0, // 余额
                avatar: '../../assets/imgs/avatar.png' // 头像
            },
            // 商家端用户
            seller: {
                phone: '',   // 账号（手机号码）
            },
            // 骑手端用户 
            taker: {
                phone: '',   // 账号（手机号码）
            },
            identity: 0 // 1为用户 2为商家 3为骑手
        }
    },
    computed: {
        
    },
    methods: {
        // 提交客户端基本信息
        subCustomerBaseInfor() {
            customerCache.addOneInfor(this.customer)
            .then(res=>{
                this.$vux.toast.text(res.msg);
                this.$store.dispatch('customerInitBaseInfor', this.customer);
                this.$router.push('/customer');
            })
            .catch(err=>{
                this.$vux.toast.text(err.msg);
            });
        }
    },
    created() {
        let query = this.$route.query;
        this.identity = query.identity;
        switch(this.identity) {
            case '1': this.customer.phone = query.phone; break;
            case '2': this.seller.phone = query.phone; break;
            case '3': this.taker.phone = query.phone; break;
        }
    }
}
</script>

<style lang="scss" scoped>
    .vux-divider {
        background: #2196F3;
        color: #fff;
    }
    .guide-content {
        .weui-cells {
            margin-top: 0;
        }
    }
    .weui-btn {
        margin-top: 40px;
    }
</style>

