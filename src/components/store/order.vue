<template>
  <div class="store-order">
    <section class="order-types">
      <ul>
        <li :class="typeActive === index && 'active'" v-for="(item,index) in store.goodtypes" :key="index" @click="changeType(item.value)">{{item.name}}</li>
      </ul>
    </section>
    <section class="order-goods">
      <ul>
        <li v-for="(item,index) in goods" :key="index">
          <div class="avatar">
            <img :src="item.avatar" alt="">
          </div>
          <div class="content">
            <h3 class="name">{{item.name}}</h3>
            <p class="desc">{{item.desc}}</p>
            <p class="sale">月售{{item.sale}}份</p>
            <p class="price">￥{{item.price}}</p>
            <p class="number">
              <x-number v-model="roundValue" button-style="round" :min="0"></x-number>
            </p>
          </div>
        </li>
      </ul>
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
      typeActive: 0,
      goods: [],
      roundValue: 0
    }
  },
  computed: {
    store() {
      return this.$store.getters.getStoreInfor;
    }
  },
  methods: {
    changeType(index) {
      this.typeActive = index;
      this.goods = this.store.goods[index];
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
    display: flex;
    font-size: rem(14px);
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
      border-radius: rem(10px);
    }
    .content {
      width: 80%;
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
</style>
