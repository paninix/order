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
    <section class="pay-store">
      <h2 class="title">商品信息</h2>
      <div class="infor">
        <img class="avatar" :src="store.avatar" alt>
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
      <div class="ablepay" v-if="ablePay" @click="subOrder">提交订单</div>
      <div class="unablepay" v-else>余额不足</div>
    </section>
  </div>
</template>

<script>
import orderCache from '@/axios/order/cache';
export default {
  name: "customer-pay",
  data() {
    return {
      order: {}
    };
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    },
    storeId() {
      return this.$store.getters.getStoreId;
    },
    customer() {
      return this.$store.getters.getCustomerBaseInfor;
    },
    store() {
      return this.$store.getters.getStoreBaseInfor;
    },
    cart() {
      return this.$store.getters.getCart;
    },
    ablePay() {
      return this.customer.count - this.cart.total > 0 ? true : false;
    }
  },
  methods: {
    subOrder() {
        this.createdOrder();
        orderCache.addOrder(this.order)
        .then(res=>{
            this.$vux.toast.text(res.msg)
        }).catch(err=>{
            this.$vux.toast.text(err.msg);
        });
    },
    // 生成订单信息
    createdOrder() {
      let customer = this.customer;
      let store = this.store;
      let cart = this.cart;
      this.order = {
        customerInfor: {
          phone: customer.phone,
          avatar: customer.avatar,
          name: customer.username
        },
        storeInfor: {
          phone: store.phone,
          avatar: store.avatar,
          name: store.shopname
        },
        customerId: this.userId,
        storeId: this.storeId,
        total: cart.total,
        goods: cart.goods,
        status: 1,
        time: Date.now()
      };
    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common.scss";
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
  .pay-user,
  .pay-store {
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
.pay-store {
  .infor {
    margin-bottom: 2vw;
    .avatar {
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
      color: #f44336;
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
  .ablepay,
  .unablepay {
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
