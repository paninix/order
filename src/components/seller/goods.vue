<template>
  <div class="seller-goods">
    <div class="goods-content">
      <div class="goods-type">
      <ul>
        <li :class="typeActive === index && 'active'" v-for="(item,index) in commodity.types" :key="index" @click="changeType(index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="goods-good">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="good">
          <div class="avatar">
            <img :src="item.avatar" alt="">
          </div>
          <div class="content">
            <h3>{{item.name}}</h3>
            <p>￥{{item.price}}</p>
          </div>
          <div class="handle">
            <x-button mini plain type="primary" @click.native="editGood(item)">编辑</x-button>
            <x-button mini plain type="warn">下架</x-button>
          </div>
        </li>
      </ul>
    </div>
    </div>
    <div class="good-manage">
      <ol>
        <li @click="editType">管理分类</li>
        <li @click="saveChange">保存修改</li>
        <li @click="addGood">新建商品</li>
      </ol>
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
      goods: [],
      typeActive: 0
    }
  },
  computed: {
    commodity() {
      return this.$store.getters.getSellerCommodity;
    }
  },
  methods: {
    changeType(index) {
      this.typeActive = index;
      this.goods =  this.commodity.goods[index];
    },
    addGood() {
      this.$router.push({path:'goodEdit', name:'seller-goodEdit', params:{type:'addGood'}});
    },
    editGood(good) {
      this.$router.push({path:'goodEdit', name:'seller-goodEdit', params:{type:'editGood', good}});
    },
    editType() {
      this.$router.push({path:'goodEdit', name:'seller-goodEdit', params:{type:'editType'}});
    },
    saveChange() {
      sellerCache.updateCommodity({commodity:this.commodity})
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

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .seller-goods {
    font-size: rem(14px);
  }
  .goods-content {
    display: flex;
  } 
  .goods-type {
    width: 30%;
    background-color: #f5f5f5;
    ul {
      width: 100%;
      text-align: center;
      li {
        padding: 5vw;
        &.active {
          background-color: #fff;
        }
      }
    }
  }
  .goods-good {
    width: 70%;
    .good {
       display: flex;
       padding: 2vw 2vw 0 2vw;
       .avatar { 
         width: 30%; 
         margin-right: 2vw;
         img {
           width: 100%;
         }
        }
       .content {
         width: 40%;
         margin-top: 2vw;
         p {
           margin-top: 1vw;
           color:#ff5339;
         }
       }
       .handle {
         width: 30%;
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
 .good-manage {
    position: relative;
    height: 12vw;
    ol {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 3vw;
      text-align: center;
      color: #fff;
      background-color: #1D62F0
    }
  }
</style>
