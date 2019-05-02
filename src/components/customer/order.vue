<template>
  <div class="customer-order">
    <section class="order-types">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/5" v-for="(item, index) in selects.types" :key="index">
            <div class="type" @click="doSelect('type', index)">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </div>
          </flexbox-item>
        </flexbox>
    </section>
    <section class="order-canteens">
        <flexbox>
          <flexbox-item v-for="(item, index) in selects.canteens" :key="index">
            <div class="canteen" @click="doSelect('canteen', index)">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </div>
          </flexbox-item>
        </flexbox>
    </section>
    <section class="order-list">
      <divider>推荐商家</divider>
      <div class="panel">
          <ul>
            <li v-for="(item, index) in shopList" :key="index" @click="intoShop(item)">
              <div class="panel-img">
                <img :src="item.avatar" alt="">
              </div>
              <div class="panel-content">
                <h3 class="title">{{item.shopname}}</h3>
                <p class="rate">
                  <rater v-model="item.rate" disabled :font-size="15"></rater>
                  <span>{{item.rate}}分</span>
                </p>
                <p class="sale">月售{{item.sale}}单</p>
              </div>
              <div class="panel-tag">
                <p :class="'s-tag s-type'+item.type">{{item.type | typeFilter}}</p>
                <p class="s-tag s-canteen">{{item.canteen | canteenFilter}}</p>
              </div>
            </li>
          </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider, Rater } from 'vux'
import sellerCache from '@/axios/seller/cache';
export default {
  name: 'customer-order',
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Rater
  },
  data() {
    return {
      selects: {
        canteens:[
          {
            name: '一食堂',
            value: 1,
            img: require('../../assets/imgs/canteen1.jpg')
          }, {
            name: '二食堂',
            value: 2,
            img: require('../../assets/imgs/canteen2.jpg')
          }, {
            name: '三食堂',
            value: 3,
            img: require('../../assets/imgs/canteen3.jpg')
          }
        ],
        types: [
          {
            name: '水果',
            value: 1,
            img: 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '汉堡披萨',
            value: 2,
            img: 'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '炸鸡炸串',
            value: 3,
            img: 'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '包子粥铺',
            value: 4,
            img: 'https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '麻辣烫',
            value: 5,
            img: 'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '米粉面馆',
            value: 6,
            img: 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '地方小吃',
            value: 7,
            img: 'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '速食简餐',
            value: 8,
            img: 'https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '盖浇饭',
            value: 9,
            img: 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          }, {
            name: '小碗菜',
            value: 10,
            img: 'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
          },
        ]
      },
      selected: {
        canteen: 0, //选择的食堂
        type: 0 // 选择的类型
      },
      shopList: []
    }
  },
  filters: {
    typeFilter(value) {
      let types = ['水果', '汉堡披萨', '炸鸡炸串', '包子粥铺', '麻辣烫', '米粉面馆', '地方小吃', '速食简餐', '盖浇饭', '小碗菜'];
      return types[value-1];
    },
    canteenFilter(value) {
      let canteens = ['一食堂', '二食堂', '三食堂'];
      return canteens[value-1];
    }
  },
  methods: {
    doSelect(name, value) {
      this.selected[name] = value+1;
      this.getSellersList();
    },
    getSellersList() {
      sellerCache.getList(this.selected)
      .then(res=>{
        this.shopList = res;
      }).catch(err=>{
         this.$vux.toast.text(err.msg);
      })
    },
    intoShop(item) {
      this.$store.dispatch('setStoreInfor', item)
      this.$router.push({path:'store', name:'store-index'});
    }  
  },
  created() {
    this.getSellersList();
  }
}
</script>

<style lang="scss">
  @import '@/assets/style/common.scss';
  .customer-order {
    .canteen, .type {
      p {
        text-align: center;
        color: #666;
        font-size: rem(12px);
      }
    }
    .canteen {
      img {
        height: rem(100px);
      }
      p {
        margin-top: 2vw;
      }
    }
    .vux-divider {
      font-weight: 700;
      font-size: rem(14px);
    }
  }
  .order-canteens {
    margin-top: 5vw;
  }
  .order-types {
    margin-top: 5vw;
    padding-left: 2vw;
    padding-right: 2vw;
    .type {
      padding-left: 2vw;
      padding-right: 2vw;
    }
  }
  .order-list {
    margin-top: 5vw;
    .panel {
      li {
        display: flex;
        padding: 2vw 4vw;
        .panel-img {
          width: 25%;
          margin-right: 4vw;
          img {
            height: rem(80px);
          }
        }
        .panel-content {
          flex-grow: 1;
          .title {
            font-size: rem(14px);
          }
          .rate {
            margin-top: 2vw;
            margin-bottom: 2vw;
            font-size: rem(12px);
          }
          .sale {
            color: #666;
            font-size: rem(12px);
          }
        }
        .panel-tag {
          font-size: rem(12px);
          .s-canteen {
            margin-top: 1vw;
          }
        }
      }
    }
  }
  
</style>
