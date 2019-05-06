<template>
  <div class="customer-pay">
      <section class="pay-user">
          <h2 class="title">个人信息</h2>
          <ul class="list">
              <li class="item">
                  <span class="name">寝室</span>
                  <span class="value">{{customer.address}}</span>
              </li>
              <li class="item">
                  <span class="name">电话</span>
                  <span class="value">{{customer.phone}}</span>
              </li>
               <li class="item">
                  <span class="name">余额</span>
                  <span class="value">￥{{customer.count}}</span>
              </li>
          </ul>
      </section>
      <section class="pay-seller">
          <h2 class="title">商品信息</h2>
          <div class="infor">
              <img class="img" :src="store.avatar" alt="">
              <span class="name">{{store.shopname}}</span>
          </div>
          <ul class="list">
              <li v-for="(item,index) in cart.goods" :key="index" class="item">
                  <span class="name">{{item.name}}</span>
                  <span class="count">× {{item.count}}</span>
                  <span class="price">￥{{item.count * item.price}}</span>
              </li>
          </ul>
      </section>
      <section class="pay-taker">
          <h2 class="title">骑手信息</h2>
      </section>
      <section class="pay-sure">
          <div class="total">合计￥{{cart.total}}</div>
          <div class="ablepay" v-if="canPay">提交订单</div>
          <div class="unablepay" v-else>余额不足</div>
      </section>
  </div>
</template>

<script>
import { debug } from 'util';
export default {
  name: 'customer-pay',
  data() {
      return {

      }
  },
  computed: {
      customer() {
          return this.$store.getters.getCustomerInfor;
      },
      store() {
          return this.$store.getters.getStoreInfor;
      },
      cart() {
          return this.$store.getters.getCart;
      },
      ablePay() {
          return this.customer.count - this.cart.total > 0 ? true : false;
      }
  },
  created() {
      console.log(this.$store.state);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
.customer-pay {
    font-size: rem(14px);
    .title {
        font-size: rem(14px);
        margin-bottom: 5vw;
    }
    .item {
        padding-top: 2vw;
        padding-bottom: 2vw;
        border-bottom: rem(1px) solid #f5f5f5;
    }
    .pay-user, .pay-seller {
        padding: 5vw;
        border-bottom: 5vw solid #eee;
    }
}
.pay-user {
    li {
        overflow: hidden;
        .name {
            float: left;
        }
        .value {
            float: right;
            color: #93999f;
        }
    }
}
.pay-seller {
    .infor {
        margin-bottom: 2vw;
        .img {
            width: 10vw;
            margin-right: 2vw;
            border-radius: rem(20px);
            vertical-align: middle;
        }
        .name {
            font-weight: 700;
            font-size: rem(14px);
        }
    }
    li {
        display: flex;
        .name {
            flex: 3;
        }
        .count {
            flex: 2;
            color: #00a0dc;
        }
        .price {
            flex: 1;
            color: #F44336;
            text-align: right;
        }
    }
}
.pay-taker {
    padding: 5vw;
}
.pay-sure {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 13vw;
    line-height: 13vw;
    .total {
        width: 65%;
        padding-left: 5vw;
        color: #fff;
        background-color: #000;
    }
    .ablepay, .unablepay {
        width: 35%;
        text-align: center;
        font-weight: 700;
    }
    .ablepay {
        background-color: #e6a23c;
    }
    .unablepay {
        background-color: #aaa;
    }
}
</style>
