<template>
  <div class="seller-manage">
    <section class="manage-panel">
      <div class="panel-img">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="panel-content">
        <h2 class="title">{{seller.shopname}}</h2>
        <p class="brief">查看店铺详情</p>
      </div>
    </section>
    <section class="manage-tab">
      <ul>
        <li v-for="(item,index) in tabs" :key="index" @click="intoTab(item)">
          <i class="iconfont" :class="item.icon"></i>
          <p class="label">{{item.label}}</p>
        </li>
      </ul>
    </section>
    <section class="manage-record">
      <div class="title">
        <h3>经营数据</h3>
        <p> 
          <span>更多</span>
          <i class="iconfont icon-more"></i>
        </p>
      </div>
      <ol class="record">
        <li>
          <p class="name">今日营业额</p>
          <p class="count">5280</p>
        </li>
        <li>
          <p class="name">今日订单</p>
          <p class="count">132</p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'seller-manage',
  data() {
    return {
      tabs: [
        {
          label: '商品',
          icon: 'icon-goods',
          path: 'goods'
        }, {
          label: '评价',
          icon: 'icon-rate',
          path: 'rates'
        }, {
          label: '财务',
          icon: 'icon-count',
          path: 'counts'
        }, {
          label: '配送',
          icon: 'icon-take',
          path: 'takers'
        }
      ]
    }
  },
  computed: {
    // 商家基本信息
    seller() {
       return this.$store.getters.getSellerInfor;
    }
  },
  methods: {
    intoTab(tab) {
      this.$router.push(tab.path);
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .manage-panel {
    display: flex;
    padding: 5vw;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    .panel-img {
      img {
        width: 18vw;
        border: rem(6px) solid #fff;
        border-radius: rem(4px);
      }
    }
    .panel-content {
      margin-left: 5vw;
      .title {
        margin-top: rem(10px);
        margin-bottom: rem(10px);
        font-size: rem(16px);
        letter-spacing: rem(1px);
      }
      .brief {
        color: #76c3f3;
        font-size: rem(14px);
      }
    }
  }
  .manage-tab {
    text-align: center;
    ul {
      display: flex;
      padding-top: 5vw;
      padding-bottom: 5vw;
      border-top: 3vw solid #f5f5f5;
      border-bottom: 3vw solid #f5f5f5;
      li {
        flex: 1;
        .iconfont {
          font-size: rem(26px);
          color: #1296db;
        }
        .label {
          margin-top: 2vw;
          font-size: rem(12px);
        }
      }
    }
  }
  .manage-record {
    border-bottom: 3vw solid #f5f5f5;
    font-size: rem(14px);
    .title {
      display: flex;
      padding: 2vw;
      border-bottom: rem(1px) solid #f5f5f5;
      h3 {
        flex: 1;
        font-size: rem(14px);
      }
      p {
        flex: 1;
        text-align: right;
      }
    }
    .record {
      padding-top: 5vw;
      padding-bottom: 5vw;
      text-align: center;
      li {
        &:first-child {
          border-right: rem(1px) solid #f5f5f5;
        }
        .name {
          margin-bottom: 2vw;
        }
        .count {
          font-size: rem(16px);
          font-weight: 700;
        }
      }
    }
  }
</style>
