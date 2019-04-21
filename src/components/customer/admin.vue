<template>
  <div class="customer-admin">
      <section class="admin-avatar">
          <img src="../../assets/imgs/avatar.png" alt="">
      </section>
      <section class="admin-infor">
          <group>
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="用户名" v-model="baseInfor.username"></x-input>
             <x-input :readonly="!isEdit" :show-clear="false" text-align="right" title="我的地址" v-model="baseInfor.address"></x-input>
             <x-input disabled text-align="right" title="手机号码" v-model="baseInfor.phone"></x-input>
             <x-input disabled text-align="right" title="余额" v-model="baseInfor.count"></x-input>
          </group>
          <x-button plain type="primary" v-if="isEdit" @click.native="updateBaseInfor">保存</x-button>
          <x-button plain type="warn" v-else @click.native="isEdit = true">修改</x-button>
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
        return this.$store.getters.getUserBaseInfor;
    },
  },
  methods: {
    // 修改用户基本信息
    updateBaseInfor() {
      console.log(customerCache);
        this.isEdit = false;
        customerCache.updateBaseInfor(this.baseInfor)
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

<style lang="scss">
  .admin-avatar {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #03A9F4,#1D62F0);
    img {
      width: 100px;
      border-radius: 50%;
    }
  }
  .admin-infor {
    .weui-cells {
      margin-top: 0;
    }
    .weui-btn {
      width: 80%;
      margin-top: 40px;
    }
  }
</style>
