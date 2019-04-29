<template>
  <div class="seller-goods">
    <div class="good-manage">
      <div class="type" @click="editType">管理分类</div>
      <div class="good" @click="addGood">新建商品</div>
    </div>
    <div class="goods-type">
      <ul>
        <li v-for="(item,index) in good" :key="index" @click="changeType(index)">{{item.value}}</li>
      </ul>
    </div>
    <div class="goods-good">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="good">
          <div class="good-img">
            <img :src="item.avatar" alt="">
          </div>
          <div class="good-content">
            <h3>{{item.name}}</h3>
            <p>￥{{item.price}}</p>
          </div>
          <div class="good-handle">
            <x-button mini plain type="primary">编辑</x-button>
            <x-button mini plain type="warn">下架</x-button>
          </div>
        </li>
      </ul>
    </div>
    <confirm v-model="isShowConfirm"
      title="测试"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <div slot="content">
          <h1>测试</h1>
          <span>222222</span>
          <p>4444444444</p>
        </div>
    </confirm>
  </div>
</template>

<script>
import {XButton, Confirm} from 'vux';
export default {
  name: 'seller-goods',
  components: {
    XButton,
    Confirm
  },
  data() {
    return {
      goods: [],
      isShowConfirm: false
    }
  },
  computed: {
    good() {
      return this.$store.getters.getSellerInfor.good;
    }
  },
  methods: {
    changeType(index) {
      this.goods = this.good[index].goods;
    },
    addGood() {
      this.isShowConfirm = true;
    },
    editType() {

    },
    onCancel() {

    },
    onConfirm() {
      
    }
  },
  created() {
    
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/common.scss';
  .seller-goods {
    font-size: rem(14px);
  }
  .good-manage {
    display: flex;
    padding: 2vw;
    color: #fff;
    background-color: #333;
    .type {
      width: 30%;
    }
    .good {
      flex-grow: 1;
      text-align: right;
    }
  } 
  .goods-type {
    width: 30%;
    height: 100%;
    position: absolute;
    background-color: #f5f5f5;
    ul {
      width: 100%;
      text-align: center;
      li {
        padding: 5vw;
      }
    }
  }
  .goods-good {
    width: 70%;
    margin-left: 30%;
    .good {
       display: flex;
       padding: 2vw 2vw 0 2vw;
       &-img {
         width: 30%;
         margin-right: 2vw;
       }
       &-content {
         flex-grow: 1;
         margin-top: 2vw;
         p {
           margin-top: 1vw;
           color:#ff5339;
         }
       }
       &-handle {
         .weui-btn {
           display: block;
           font-size: rem(12px);
         }
         .weui-btn + .weui-btn {
           margin-top: 2vw;
         }
       }
     }
   }
 
</style>
