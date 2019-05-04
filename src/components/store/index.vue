<template>
  <div class="store-index">
    <section class="store-bar">
      <div class="back" @click="goHome()">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="img">
        <img :src="store.avatar" alt="">
      </div>
      <div class="content">
        <h2 class="title">{{store.shopname}}</h2>
        <div class="infor">
          <span>评价{{store.rate}}</span>
          <span>月售{{store.sale}}单</span>
        </div>
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
    },
    goHome() {
      this.$router.push('/customer');
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
    display: flex;
    align-items: center;
    padding-top: 5vw;
    padding-bottom: 5vw;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    .back {
      margin-left: 2vw;
      margin-right: 4vw;
      .iconfont {
        font-size: rem(28px);
      }
    }
    .img {
      margin-right: 5vw;
      img {
        width: 20vw;
        border: rem(6px) solid #fff;
        border-radius: rem(4px);
      }
    }
    .title {
      margin-bottom: 3vw;
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
