<template>
  <div class="store-index">
    <section :class="'store-bar s-type'+baseInfor.type" v-show="!isSub">
      <div class="back" @click="goHome()">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="avatar">
        <img :src="baseInfor.avatar" alt="">
      </div>
      <h2 class="title">{{baseInfor.shopname}}</h2>
      <div class="infor">
        <span>评价{{baseInfor.rate}}</span>
        <span>月售{{baseInfor.sale}}单</span>
      </div>
    </section>
    <section class="store-tab" v-show="!isSub">
      <ol>
        <li :class="tabActive === index && 'active'" v-for="(item, index) in tabs" :key="index" @click="changeTab(index)">{{item.label}}</li>
      </ol>
    </section>
    <router-view/>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isSub: false,
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
    baseInfor() {
      return this.$store.getters.getStoreBaseInfor;
    }
  },
  watch: {
    '$route'(to, from) {
      let meta = this.$router.currentRoute.meta;
      this.isSub = meta.isSub || false;
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
    position: relative;
    padding-top: 5vw;
    padding-bottom: 5vw;
    text-align: center;
    .back {
      position: absolute;
      top: 5vw;
      left: 5vw;
      .iconfont {
        font-size: rem(24px);
      }
    }
    .avatar {
      img {
        width: 20vw;
        border-radius: rem(4px);
      }
    }
    .title {
      margin-top: 3vw;
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
