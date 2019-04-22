<template>
  <div class="pages-guide">
    <divider>请补全下列信息</divider>
    <section class="guide-content" v-show="status === '1'">
        <group>
             <x-input :show-clear="false" text-align="right" title="用户名" v-model="customer.username"></x-input>
             <x-input :show-clear="false" text-align="right" title="我的地址" v-model="customer.address"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="customer.phone"></x-input>
             <x-button type="warn" :disabled="inputFormat" @click.native="subCustomerInfor">提交</x-button>
        </group>
    </section>
    <section class="guide-content" v-show="status === '2'">

    </section>
    <section class="guide-content" v-show="status === '3'">

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
            }
        }
    },
    computed: {
        inputFormat() {
            if(this.customer.username && this.customer.address) {
                return false;
            }
            return true;
        },
        status() {
            return this.$store.getters.getUserStatus;
        },
        phone() {
            return this.$store.getters.getUserPhone;
        }
    },
    methods: {
        // 提交客户端基本信息
        subCustomerInfor() {
            customerCache.addInfor(this.customer)
            .then(res=>{
                this.$vux.toast.text(res.msg);
                this.$router.push('/customer');
            })
            .catch(err=>{
                this.$vux.toast.text(err.msg);
            });
        }
    },
    created() {
        let user = ['customer', 'seller', 'taker'][this.status-1];
        this[user].phone = this.phone;
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
        .weui-btn {
            width: 90%;
            margin-top: 40px;
        }
    }
</style>

