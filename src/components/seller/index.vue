<template>
  <div class="seller-index">
    <section class="tab-title">
      <span>{{tabTitle}}</span>
    </section>
    <router-view/>
    <tab-swiper :tabs="tabs" @changeTab="changeTab"></tab-swiper>
  </div>
</template>

<script>
import TabSwiper from '@/components/common/tabSwiper';
import sellerCache from '@/axios/seller/cache';
export default {
  name: 'seller-index',
  components: {
    TabSwiper
  },
  data() {
    return {
      tabs: [
        {
          label: '接单',
          icon: 'icon-order',
          path: 'order'
        }, {
          label: '订单',
          icon: 'icon-orders',
          path: 'orders'
        }, {
          label: '管理',
          icon: 'icon-shop',
          path: 'manage'
        }
      ],
      tabTitle: '接单'
    }
  },
  computed: {
    phone() {
      return this.$store.getters.getUserPhone;
    }
  },
  methods: {
    changeTab(label) {
      this.tabTitle = label;
    },
    getsellerInfor() {
      sellerCache.getInfor(this.phone)
      .then(res=>{
        this.$store.dispatch('sellerInitInfor', res);
      }).catch(err=>{
        this.$vux.toast.text(err.msg);
      });
    }
  },
  created() {
    this.getsellerInfor();
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/common.scss';
  .tab-title {
    height: rem(20px);
    padding: 20px;
    font-size: rem(16px);
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
  }
</style>
