<template>
  <div class="store-order">
    <section class="order-content">
      <section class="order-types">
        <ul>
          <li :class="typeActive === index && 'active'" v-for="(item,index) in commodity.types" :key="index" @click="changeType(index)">{{item.name}}</li>
        </ul>
      </section>
      <section class="order-goods">
        <ul>
          <li v-for="(item,index) in goods" :key="index">
            <div class="avatar" @click="showDetail(item)">
              <img :src="item.avatar" alt="">
            </div>
            <div class="content">
              <h3 class="name">{{item.name}}</h3>
              <p class="desc">{{item.desc}}</p>
              <p class="sale">月售{{item.sale}}份</p>
              <p class="price">￥{{item.price}}</p>
              <p class="number">
                <x-number v-model="item.count" button-style="round" :min="0" @click.native="handleGood(item)"></x-number>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </section>
    <section class="order-cart">
      <div class="cart">
        <div class="top" v-show="isShowCart">
          <div class="title">
            <span class="name">购物车</span>
            <span class="empty" @click="emptyCart">清空</span>
          </div>
          <ul class="list">
            <li v-for="(item, index) in cart.goods" :key="index">
              <span class="name">{{item.name}}</span>
              <span class="price">￥{{item.price * item.count}}</span>
              <span class="count"><x-number v-model="item.count" button-style="round" :min="0" @click.native="handleGood(item)"></x-number></span>
            </li>
          </ul>
        </div>
        <ol class="bottom">
          <li class="left">
            <i class="iconfont" :class="cart.total > 0 ? 'icon-cartfill': 'icon-cart'" @click="toggleCart"></i>
            <span class="total">￥{{cart.total}}</span>
            <span>另需配送费￥{{deliverMoney}}元</span>
          </li>
          <li class="right" :class="remainMoney <= 0 && 'pay'">
            <span v-if="remainMoney > 0">还差￥{{remainMoney}}元起送</span>
            <span v-else @click="doPay">去结算</span>
          </li>
        </ol>
        <div class="mask" v-show="isShowCart"></div>
      </div>
    </section>
  </div>
</template>

<script>
import {Group, XNumber } from 'vux';
export default {
  name: 'store-order',
  components: {
    Group,
    XNumber 
  },
  data() {
    return {
      deliverMoney: 4,
      startMoney: 40,
      typeActive: 0,
      isShowCart: false,
      goods: []
    }
  },
  computed: {
    commodity() {
      return this.$store.getters.getStoreCommodity;
    },
    cart(){
      return this.$store.getters.getCart;
    },
    remainMoney() {
      return this.startMoney - this.cart.total;
    }
  },
  methods: {
    changeType(index) {
      this.typeActive = index;
      this.goods = this.commodity.goods[index];
    },
    toggleCart() {
      this.isShowCart = !this.isShowCart;
    },
    emptyCart() {
      this.cart.total = 0;
      let goods = this.cart.goods;
      let good;
      for(let index in goods) {
        good = goods[index];
        good.count = 0;
        delete goods[good.goodid];
      }
      this.isShowCart = false;
    },
    handleGood(good) {
      this.$store.dispatch('handleGood', good);
    },
    showDetail(good) {
      this.$router.push({path:'good', name: 'store-good', params: good});
    },
    doPay() {
      this.$router.push({path:'pay',name:'customer-pay'});
    }
  },
  created() {
    this.changeType(0);
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .store-order {
    font-size: rem(14px);
  }
  .order-content {
    display: flex;
  }
  .order-types {
    width: 30%;
    text-align: center;
    background-color: #f5f5f5;
    li {
      padding: 5vw;
      &.active {
        background-color: #fff;
      }
    }
  }
  .order-goods {
    width: 70%;
    li {
      display: flex;
      padding: 2vw;
    }
    img {
      width: 100%;
      border-radius: rem(10px);
    }
    .avatar { 
      width: 30%; 
      margin-right: 2vw;
    }
    .content {
      width: 70%;
      .name {
        margin-bottom: 1vw;
      }
      .desc, .sale {
        font-size: rem(12px);
        color: #666;
      }
      .price {
        color: #ff5339
      }
      .number {
        .weui-cell {
          font-size: rem(12px);
        }
      }
    }
  }
  .order-cart {
    position: relative;
    height: 13vw;
    color: hsla(0,0%,100%,.4);
    .cart {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .top {
      color: #000;
      background-color: #fff;
      .title {
        padding: 3vw;
        overflow: hidden;
        background-color: #f5f5f5;
        font-size: rem(12px);
        font-weight: 700;
        .name {
          color: #07111b;
        }
        .empty {
          color: #03A9F4;
          float: right;
        }
      }
      .list {
        padding-left: 4vw;
        padding-right: 4vw;
        li {
          display: flex;
          border-bottom: 1px solid #ccc;
        }
        .name, .price {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: rem(12px);
          font-weight: 700;
        }
        .price {
          color: #F44336;
          justify-content: flex-end;
        }
        .count {
          flex: 2;
        }
      }
    }
    .bottom {
      height: 13vw;
      line-height: 13vw;
      .left {
        flex: 2;
        font-size: rem(16px);
        background-color: #141d27;
        .total {
            display: inline-block;
            width: 10vw;
            margin-right: 2vw;
            color: #F44336;
        }
      }
      .right {
        text-align: center;
        background-color: #2b343c;
      }
      .pay {
        color: #fff;
        background-color: #1D62F0;
      }
      .iconfont {
        margin-left: 5vw;
        margin-right: 3vw;
        color: #1D62F0;;
        font-size: rem(28px);
      }
    }
    .mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(7,17,27,.6);
      z-index: -1;
    }
  }
</style>
