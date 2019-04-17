<template>
  <div class="customer-index">
    <router-view/>
    <bar-swiper :bars="bars"></bar-swiper>
  </div>
</template>

<script>
import BarSwiper from '@/components/common/barSwiper';
export default {
  name: 'customer-index',
  components: {
    BarSwiper
  },
  data() {
    return {
      bars: [
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
      ]
    }
  },
  methods: {
    
  },
  created() {

  }
}
</script>

<style lang="scss">
  
</style>
