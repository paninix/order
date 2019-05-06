<template>
  <div class="seller-index">
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
import sellerCache from '@/axios/seller/cache';
export default {
  name: 'seller-index',
  components: {
    TabSwiper
  },
  data() {
    return {
      isSub: false,
      tabTitle: '',
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
    getsellerInfor() {
      sellerCache.getInfor(this.phone)
      .then(res=>{
        this.$store.dispatch('sellerInitInfor', res);
      }).catch(err=>{
        this.$vux.toast.text(err.msg);
      });
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.getsellerInfor();
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
