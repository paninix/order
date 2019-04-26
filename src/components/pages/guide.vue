<template>
  <div class="pages-guide">
    <divider>请补全下列信息</divider>
    <section class="guide-content" v-show="status === '1'">
        <group>
             <x-input :show-clear="false" text-align="right" title="用户名" v-model="customer.username"></x-input>
             <x-input :show-clear="false" text-align="right" title="我的地址" v-model="customer.address"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="customer.phone"></x-input>
             <x-button type="warn" :disabled="inputCustomerFormat" @click.native="subCustomerInfor">提交</x-button>
        </group>
    </section>
    <section class="guide-content" v-show="status === '2'">
        <group>
             <x-input :show-clear="false" text-align="right" title="商店名" v-model="seller.shopname"></x-input>
             <x-input :show-clear="false" text-align="right" title="商店地址" v-model="seller.address"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品类别" v-model="sheet.typeSelected" @on-focus="showSheet('type')"></x-input>
             <x-input :show-clear="false" text-align="right" title="所在食堂" v-model="sheet.canteenSelected" @on-focus="showSheet('canteen')"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="seller.phone"></x-input>
             <x-button type="warn" :disabled="inputSellerFormat" @click.native="subSellerInfor">提交</x-button>
        </group>
    </section>
    <section class="guide-content" v-show="status === '3'">

    </section>
    <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeSheet"></actionsheet>
  </div>
</template>

<script>
import customerCache from '@/axios/customer/cache';
import sellerCache from '@/axios/seller/cache';
import { Group, XButton, XInput, Divider, Actionsheet } from 'vux';
export default {
    name: 'pages-guide',
    components: {
        Group,
        XButton,
        XInput,
        Divider,
        Actionsheet
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
                shopname: '',   // 商家名
                address: '',    // 地址
                type: 0,    // 商家类别
                canteen: 0, // 所在食堂
                avatar: 'https://fuss10.elemecdn.com/1/2d/5653e567a1eb74d5af0199a2b8582png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'    

            },
            // 骑手端用户 
            taker: {
                phone: '',   // 账号（手机号码）
            },
            sheet: {
                isShow: false,
                type: 0,
                menus: {},
                typeSelected: '',
                typeMenus: {
                    1: '水果',
                    2: '汉堡披萨',
                    3: '炸鸡炸串',
                    4: '包子粥铺',
                    5: '麻辣烫',
                    6: '米粉面馆',
                    7: '地方小吃',
                    8: '速食简餐',
                    9: '盖浇饭',
                    10: '小碗菜'
                },
                canteenSelected: '',
                canteenMenus: {
                    1: '一食堂',
                    2: '二食堂',
                    3: '三食堂'
                }
            }
        }
    },
    computed: {
        inputCustomerFormat() {
            if(this.customer.username && this.customer.address) {
                return false;
            }
            return true;
        },
        inputSellerFormat() {
            let seller = this.seller;
            if(seller.shopname && seller.address && seller.type && seller.canteen) {
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
            }).catch(err=>{
                this.$vux.toast.text(err.msg);
            });
        },
        // 提交商家端基本信息
        subSellerInfor() {
            sellerCache.addInfor(this.seller)
            .then(res=>{
                this.$vux.toast.text(res.msg);
                this.$router.push('/seller');
            }).catch(err=>{
                this.$vux.toast.text(err.msg);
            });
        },
        showSheet(type) {
            if(type === 'type') {
                this.sheet.type = 1;
                this.sheet.menus = this.sheet.typeMenus;
            } else if(type === 'canteen') {
                this.sheet.type = 2;
                this.sheet.menus = this.sheet.canteenMenus;
            }
            this.sheet.isShow = true;
        },
        changeSheet(index, value) {
            if(this.sheet.type === 1) {
                this.seller.type = index;
                this.sheet.typeSelected = value;
            } else if(this.sheet.type === 2) {
                this.seller.canteen = index;
                this.sheet.canteenSelected = value;
            }
        }
    },
    created() {
        let user = ['customer', 'seller', 'taker'][this.status-1];
        this[user].phone = this.phone;
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/common.scss';
    .vux-divider {
        font-size: rem(14px);
        color: #fff;
        background: #2196F3;
    }
    .guide-content {
        .weui-cells {
            margin-top: 0;
        }
        .weui-btn {
            width: 90%;
            margin-top: 10vw;
        }
    }
</style>

