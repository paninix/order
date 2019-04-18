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
export default {
  name: 'customer-index',
  components: {
    TabSwiper
  },
  data() {
    return {
      tabs: [
        {
          label: '外卖',
          icon: 'icon-shop',
          path: 'shop'
        }, {
          label: '订单',
          icon: 'icon-order',
          path: 'order'
        }, {
          label: '我的',
          icon: 'icon-admin',
          path: 'admin'
        }
      ],
      tabTitle: '外卖'
    }
  },
  methods: {
    changeTab(label) {
      this.tabTitle = label;
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
  .tab-title {
    height: 20px;
    padding: 20px;
    color: #fff;
    background: linear-gradient(45deg, #03A9F4,#1D62F0)
  }
</style>
