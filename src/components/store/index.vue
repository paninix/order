<template>
  <div class="store-index">
    <section class="store-bar">
      <div class="avatar">
        <img :src="store.avatar" alt="">
      </div>
      <h2 class="title">{{store.shopname}}</h2>
      <div class="infor">
        <span>评价{{store.rate}}</span>
        <span>月售{{store.sale}}单</span>
      </div>
    </section>
    <section class="store-tab">
      <ol>
        <li :class="tabActive === index && 'active'" v-for="(item, index) in tabs" :key="index" @click="changeTab(index)">{{item.label}}</li>
      </ol>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'store-index',
  data() {
    return {
      tabActive: 0,
      tabs: [
        {
          label: '点餐',
          path: 'order'
        }, {
          label: '评价',
          path: 'rate'
        }, {
          label: '商家',
          path: 'infor'
        }
      ]
    }
  },
  computed: {
    store() {
      return this.$store.getters.getStoreInfor;
    }
  },
  methods: {
    changeTab(index) {
      this.tabActive = index;
      let path = this.tabs[index].path;
      this.$router.push(path);
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/common.scss';
  .store-index {
    font-size: rem(14px);
  }
  .store-bar {
    padding-top: 5vw;
    padding-bottom: 5vw;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    .avatar {
      display: inline-block;
      img {
        width: 20vw;
        border: rem(6px) solid #fff;
        border-radius: rem(4px);
      }
    }
    .title {
      margin-top: 3vw;
    }
    .infor {
      margin-top: 1vw;
      font-size: rem(12px);
    }
  }
  .store-tab {
    border-bottom: rem(1px) solid #f5f5f5;
    padding-top: 3vw;
    padding-bottom: 3vw;
    ol {
      text-align: center;
      li {
        &.active {
          font-weight: 700;
        }
      }
    }
  }
</style>
