<template>
  <div class="customer-index">
    <section class="tab-title">
      <div>
        <i class="iconfont icon-back" v-show="isSub" @click="goBack"></i>
        <span>{{tabTitle}}</span>
      </div>
    </section>
    <router-view/>
    <tab-swiper :tabs="tabs" v-show="!isSub"></tab-swiper>
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
      isSub: false,
      tabTitle: '',
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
      ]
    }
  },
  computed: {
    phone() {
      return this.$store.getters.getUserPhone;
    }
  },
  watch: {
    '$route': {
      handler() {
        let meta = this.$router.currentRoute.meta;
        this.isSub = meta.isSub || false;
        this.tabTitle = meta.tabTitle;
      },
      immediate: true
    }
  },
  methods: {
    getCustomerInfor() {
      customerCache.getInfor(this.phone)
      .then(res=>{
        this.$store.dispatch('setCustomerInfor', res);
      }).catch(err=>{
        this.$vux.toast.text(err.msg);
      });
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.getCustomerInfor();
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .tab-title {
    height: rem(20px);
    padding: 4vw 2vw;
    font-size: rem(16px);
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    .iconfont {
      font-size: rem(16px);
    }
  }
</style>
