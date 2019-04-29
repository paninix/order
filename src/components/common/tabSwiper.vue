<template>
  <div class="tab-swiper">
      <tabbar @on-index-change="onSwiper" style="position: fixed">
        <tabbar-item v-for="(item, index) in tabs" :key="index" :selected="index === 0">
          <i slot="icon" class="iconfont" :class="item.icon"></i>
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux';
export default {
  name: 'tab-swiper',
  components: {
    Tabbar,
    TabbarItem
  },
  props: ['tabs'],
  data() {
    return {
      
    }
  },
  methods: {
    onSwiper(index) {
      let tab = this.tabs[index];
      this.$store.dispatch('setTabTitle', tab.label);
      this.$router.push(tab.path);
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
  .tab-swiper {
    margin-top: 63px;
  }
  .weui-tabbar {
    a {
      text-decoration: none;
    }
    &__label {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
</style>
