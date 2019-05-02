<template>
  <div class="seller-goods">
    <div class="good-manage">
      <div @click="editType">管理分类</div>
      <div @click="saveChange">保存修改</div>
      <div @click="addGood">新建商品</div>
    </div>
    <div class="goods-type">
      <ul>
        <li v-for="(item,index) in types" :key="index" @click="changeType(index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="goods-good">
      <ul>
        <li v-for="(item,index) in typeGoods" :key="index" class="good">
          <div class="good-img">
            <img :src="item.avatar" alt="">
          </div>
          <div class="good-content">
            <h3>{{item.name}}</h3>
            <p>￥{{item.price}}</p>
          </div>
          <div class="good-handle">
            <x-button mini plain type="primary" @click.native="editGood(item)">编辑</x-button>
            <x-button mini plain type="warn">下架</x-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {XButton} from 'vux';
import sellerCache from '@/axios/seller/cache';
export default {
  name: 'seller-goods',
  components: {
    XButton
  },
  data() {
    return {
      typeGoods: [],
    }
  },
  computed: {
    types() {
      return this.$store.getters.getSellerInfor.goodtypes;
    },
    goods() {
      return this.$store.getters.getSellerInfor.goods;
    }
  },
  methods: {
    changeType(index) {
      this.typeGoods =  this.goods[index];
    },
    addGood() {
      this.$router.push({path:'edit', name:'seller-edit', params:{type:'addGood'}});
    },
    editGood(good) {
      this.$router.push({path:'edit', name:'seller-edit', params:{type:'editGood', good}});
    },
    editType() {
      this.$router.push({path:'edit', name:'seller-edit', params:{type:'editType'}});
    },
    saveChange() {
      let goodsList = {
        goodtypes: this.types,
        goods: this.goods
      };
      sellerCache.updateGoodsList(goodsList)
      .then(res=>{
        this.$vux.toast.text(res.msg);
      }).catch(err=>{
        this.$vux.toast.text(err.msg);
      });
    }
  },
  created() {
    this.changeType(0);
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
    padding: 3vw;
    text-align: center;
    color: #fff;
    background-color: #333;
    div {
      flex: 1;
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
