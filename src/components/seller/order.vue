<template>
  <div class="seller-order">
    <ul>
      <li class="order-list" v-for="(item, index) in reverseOrders" :key="index">
        <div class="order-number">#{{orders.length-index}}</div>
        <div class="customer-infor">
          <div class="avatar"><img :src="item.customerInfor.avatar" alt=""></div>
          <span class="name">{{item.customerInfor.name}}</span>
          <p class="phone">
            <span>{{item.customerInfor.phone}}</span>
            <i class="iconfont icon-phone"></i>
          </p>
        </div>
        <div class="goods-infor" v-show="opens[index].meta">
          <ul>
            <li v-for="(item,index) in item.goods" :key="index" class="good-list">
              <span class="name">{{item.name}}</span>
              <span class="count">×{{item.count}}</span>
              <span class="price">{{item.count * item.price}}</span>
            </li>
          </ul>
        </div>
        <div class="order-infor">
          <div class="total">
            <span class="title">本单收入</span>
            <span class="price">￥{{item.total}}</span>
            <span class="action" @click="toggleOrder(index)">{{opens[index].meta ? '收起' : '展开'}}</span>
          </div>
          <div class="sure">
            <div class="btn">出餐</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import orderCache from '@/axios/order/cache';
export default {
  name: 'seller-order',
  data() {
    return {
      orders: [],
      opens: []
    }
  },
  computed: {
    seller() {
      return this.$store.getters.getSellerBaseInfor;
    },
    reverseOrders() {
      return this.orders.reverse();
    }
  },
  methods: {
    getOrders() {
      orderCache.getSellerOrders()
      .then(res=>{
        this.orders = res;
        this.initOpenStatus();
      }).catch(err=> {
        this.$vux.toast.text(err.msg);
      })
    },
    toggleOrder(index) {
      this.opens[index].meta = !this.opens[index].meta;
    },
    initOpenStatus() {
      for(let i=0; i<this.orders.length; i++) {
        this.opens.push({meta:true});
      }
    }
  },
  created() {
    // this.getOrders();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.seller-order {
  font-size: rem(14px);
}
.order-list {
  padding: 2vw;
  border-bottom: 2vw solid #eee;
}
.order-number {
  font-weight: 700;
  font-size: rem(16px);
  margin-bottom: 1vw;
}
.customer-infor {
  display: flex;
  align-items: center;
  .avatar {
    width: 15%;
    img {
      width: 10vw;
      height: 10vw;
      border-radius: 100%;
    }
  }
  .name {
    width: 50%;
    font-weight: 700;
  }
  .phone {
    width: 35%;
    text-align: right;
    color: #999;
  }
  .iconfont {
    font-size: rem(14px);
    color: #2196F3;
  }
}
.goods-infor {
  margin-bottom: 2vw;
  border-top: rem(1px) solid #eee;
  border-bottom: rem(1px) solid #eee;
  .good-list {
    display: flex;
    padding-top: 1vw;
    padding-bottom: 1vw;
    .name {
      flex: 4;
    }
    .count {
      flex: 1;
      color: #00a0dc;
    }
    .price {
      flex: 1;
      color: #f44336;
      text-align: right;
    }
  }
}
.order-infor {
  overflow: hidden;
  .total {
    float: left;
    line-height: 9vw;
    .title {
      font-weight: 700;
    }
    .price {
      margin-left: 2vw;
      margin-right: 2vw;
      color: #F44336;
    }
    .action {
      color: #00a0dc;
    }
  }
  .sure {
    float: right;
    .btn {
      padding: 2vw 10vw;
      display: inline-block;
      border-radius: 2vw;
      color: #fff;
      font-size: rem(12px);
      background-color: #409eff;
      border-color: #409eff;
    }
  }
}
</style>
