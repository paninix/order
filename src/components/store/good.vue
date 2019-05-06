<template>
  <div class="store-good">
    <section class="good-img">
        <img :src="good.avatar" alt="">
        <i class="iconfont icon-back" @click="goBack"></i>
    </section>
    <section class="good-infor">
        <h2 class="name">{{good.name}}</h2>
        <p class="sale">月售{{good.sale}}份</p>
        <p class="price">￥{{good.price}}</p>
        <div class="btn" @click="addCart">加入购物车</div>
    </section>
    <section class="good-desc">
        <h3 class="title">商品介绍</h3>
        <p class="content">{{good.desc}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'store-good',
  data() {
      return {
          good: {}
      }
  },
  methods: {
      addCart() {
          let good = this.good;
          good.count || (good.count = 0);
          good.count++;
          this.$store.dispatch('handleGood', good);
          this.$vux.toast.text("在购物车等亲哦~");
      },
      goBack() {
          this.$router.go(-1);
      }
  },
  created() {
      this.good = this.$route.params;
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/common.scss';
    .good-img {
        position: relative;
        img {
            height: 100vw;
        }
        .iconfont {
            position: absolute;
            top: 5vw;
            left: 5vw;
            color: #00a0dc;
            font-size: rem(24px);
        }
    }
    .good-infor {
        padding: 5vw 5vw 0;
        border-bottom: 5vw solid #eee;
        .name {
            font-size: rem(14px);
        }
        .sale {
            font-size: rem(12px);
            color: #999;
            margin: 2vw 0 5vw;
        }
        .price {
            color: #f01414;
            font-weight: 700;
        }
        .btn {
            position: relative;
            bottom: 6vw;
            left: 64vw;
            padding: 2.4vw 4vw;
            display: inline-block;
            border-radius: 5vw;
            color: #fff;
            font-size: rem(12px);
            background-color: #409eff;
            border-color: #409eff;
        }
    }
    .good-desc {
        padding: 5vw;
        .title {
            font-size: rem(14px);
            font-weight: 400;
            margin-bottom: 2vw;
        }
        .content {
            font-size: rem(12px);
            color: #4d555d;
            line-height: rem(24px);
            padding-left: 2vw;
            font-weight: 200;
        }
    }
</style>
