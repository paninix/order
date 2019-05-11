<template>
  <div class="seller-store">
      <section class="store-avatar">
          <img :src="baseInfor.avatar" alt="">
      </section>
      <section class="store-infor">
          <group title="基本信息">
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="店铺名" v-model="baseInfor.shopname"></x-input>
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="店铺地址" v-model="baseInfor.address"></x-input>
             <x-input readonly :show-clear="false" text-align="right" title="商品类别" v-model="sheet.typeSelected" @on-focus="showSheet('type')"></x-input>
             <x-input readonly :show-clear="false" text-align="right" title="所在食堂" v-model="sheet.canteenSelected" @on-focus="showSheet('canteen')"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="baseInfor.phone"></x-input>
          </group>
          <x-button type="primary" v-if="isEdit" @click.native="updateBaseInfor">保存</x-button>
          <x-button type="warn" v-else @click.native="isEdit = true">修改</x-button>
      </section>
      <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeSheet"></actionsheet>
  </div>
</template>

<script>
import { Group, XInput, XButton, Actionsheet } from 'vux';
import sellerCache from '@/axios/seller/cache';
export default {
  name: 'seller-store',
  components: {
    Group,
    XInput,
    XButton,
    Actionsheet
  },
  data() {
    return {
      isEdit: false,
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
    // 用户基本信息
    baseInfor() {
        return this.$store.getters.getSellerBaseInfor;
    },
  },
  methods: {
    // 修改用户基本信息
    updateBaseInfor() {
        this.isEdit = false;
        sellerCache.updateBaseInfor({baseInfor:this.baseInfor})
        .then(res=>{
          this.$vux.toast.text(res.msg);
        }).catch(err=>{
          this.$vux.toast.text(err.msg);
        });
    },
    initSheet() {
      let sheet = this.sheet;
      sheet.typeSelected = sheet.typeMenus[this.baseInfor.type];
      sheet.canteenSelected = sheet.canteenMenus[this.baseInfor.canteen];
    },
    showSheet(type) {
        if(!this.isEdit) {
          return;
        }
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
            this.baseInfor.type = index;
            this.sheet.typeSelected = value;
        } else if(this.sheet.type === 2) {
            this.baseInfor.canteen = index;
            this.sheet.canteenSelected = value;
        }
    }
  },
  created() {
    this.initSheet();
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .store-avatar {
    padding-top: 5vw;
    padding-bottom: 5vw;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    img {
      width: rem(100px);
      border-radius: 50%;
    }
  }
  .store-infor {
    .weui-btn {
      width: 80%;
      margin-top: 10vw;
    }
  }
</style>
