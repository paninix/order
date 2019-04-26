<template>
  <div class="customer-index">
    <section class="tab-title">
      <span>{{tabTitle}}</span>
    </section>
    <router-view/>
    <tab-swiper :tabs="tabs" @changeTab="changeTab"></tab-swiper>
  </div>
</template>

<script>
import TabSwiper from '@/components/common/tabSwiper';
import customerCache from '@/axios/customer/cache';
export default {
  name: 'customer-index',
  components: {
    TabSwiper
  },
  data() {
    return {
      tabs: [
        {
          label: '点餐',
          icon: 'icon-home',
          path: 'order'
        }, {
          label: '订单',
          icon: 'icon-order',
          path: 'orders'
        }, {
          label: '我的',
          icon: 'icon-admin',
          path: 'admin'
        }
      ],
      tabTitle: '外卖'
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
    getCustomerInfor() {
      customerCache.getInfor(this.phone)
      .then(res=>{
        this.$store.dispatch('customerInitInfor', res);
      }).catch(err=>{
        this.$vux.toast.text(err.msg);
      });
    }
  },
  created() {
    this.getCustomerInfor();
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
