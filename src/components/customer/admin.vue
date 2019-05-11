<template>
  <div class="customer-admin">
      <section class="admin-avatar">
          <img :src="baseInfor.avatar" alt="">
      </section>
      <section class="admin-infor">
          <group title="基本信息">
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="用户名" v-model="baseInfor.username"></x-input>
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="我的地址" v-model="baseInfor.address"></x-input>
             <x-input disabled text-align="right" title="手机号" v-model="baseInfor.phone"></x-input>
             <x-input disabled text-align="right" title="余额" v-model="baseInfor.count"></x-input>
          </group>
          <x-button type="primary" v-if="isEdit" @click.native="updateBaseInfor">保存</x-button>
          <x-button type="warn" v-else @click.native="isEdit = true">修改</x-button>
      </section>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux';
import customerCache from '@/axios/customer/cache';
export default {
  name: 'customer-admin',
  components: {
    Group,
    XInput,
    XButton
  },
  data() {
    return {
      isEdit: false
    }
  },
  computed: {
    // 用户基本信息
    baseInfor() {
        return this.$store.getters.getCustomerBaseInfor;
    },
  },
  methods: {
    // 修改用户基本信息
    updateBaseInfor() {
        this.isEdit = false;
        customerCache.updateBaseInfor({baseInfor:this.baseInfor})
        .then(res=>{
          this.$vux.toast.text(res.msg);
        }).catch(err=>{
          this.$vux.toast.text(err.msg);
        });
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/common.scss';
  .admin-avatar {
    padding-top: 5vw;
    padding-bottom: 5vw;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    img {
      width: 25vw;
      height: 25vw;
      border-radius: 100%;
    }
  }
  .admin-infor {
    .weui-btn {
      width: 80%;
      margin-top: 10vw;
    }
  }
</style>
