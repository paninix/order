<template>
  <div class="bar-swiper">
      <tabbar @on-index-change="onSwiper">
        <tabbar-item v-for="(item, index) in bars" :key="index" :selected="index === 0">
          <i slot="icon" class="iconfont" :class="item.icon"></i>
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux';
export default {
  name: 'bar-swiper',
  components: {
    Tabbar,
    TabbarItem
  },
  props: ['bars'],
  data() {
    return {
      
    }
  },
  methods: {
    onSwiper(index) {
      let path = this.bars[index].path;
      this.$router.push(path);
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
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
