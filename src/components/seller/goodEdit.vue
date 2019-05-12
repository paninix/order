<template>
  <div class="seller-edit">
    <section class="edit-good" v-show="type === 'editGood'">
        <group title="商品编辑">
             <x-input :show-clear="false" text-align="right" title="商品图片" v-model="good.avatar"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品名称" v-model="good.name"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品描述" v-model="good.desc"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品价格" v-model="good.price"></x-input>
             <x-button type="warn" :disabled="inputFormat" @click.native="subGoodEdit">提交</x-button>
        </group>
    </section>
    <section class="edit-good" v-show="type === 'addGood'">
        <group title="商品添加">
             <x-input :show-clear="false" text-align="right" title="商品图片" v-model="good.avatar"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品名称" v-model="good.name"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品描述" v-model="good.desc"></x-input>
             <x-input :show-clear="false" text-align="right" title="商品价格" v-model="good.price"></x-input>
             <x-input :show-clear="false" text-align="right" title="店内分类" v-model="goodType.name" @on-focus="sheet.isShow=true"></x-input>
             <x-button type="warn" :disabled="inputFormat" @click.native="subGoodAdd">提交</x-button>
        </group>
        <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeSheet"></actionsheet>
    </section>
    <section class="edit-type" v-show="type === 'editType'">
        <group title="管理分类">
            <ul>
                <li v-for="(item, index) in commodity.types" :key="index">
                    <span class="name">{{item.name}}</span>
                    <span class="handle" @click="subTypeEdit(item)">编辑</span>
                </li>
            </ul>
            <x-button type="primary" @click.native="subTypeAdd">添加分类</x-button>
        </group>
        <actionsheet v-model="sheet.isShow" :menus="sheet.menus" @on-click-menu="changeSheet"></actionsheet>
    </section>
  </div>
</template>

<script>
import { Group, XButton, XInput, Divider, Actionsheet } from 'vux';
export default {
  name: 'seller-edit',
  components: {
    Group,
    XButton,
    XInput,
    Divider,
    Actionsheet
  },
  data() {
    return {
        good: {
            avatar: '',
            desc: '',
            name: '',
            price: 0,
            sale: 0
        },
        goodType: {
            name: '',
            typeid: 0,
        },
        type: '',
        sheet: {
            isShow: false,
            menus: []
        }
    }
  },
  computed: {
    commodity() {
        return this.$store.getters.getSellerCommodity;
    },
    inputFormat() {
        return false;
    }
  },
  methods: {
      subGoodEdit() {
          this.$router.go(-1);
      },
      subGoodAdd() {
          let goods = this.commodity.goods[this.goodType.typeid];
          if(goods.length === 0) { // 该类添加的第一个商品
            this.good.goodid = (this.goodType.typeid + 1) * 100;
          } else {
              this.good.goodid = goods[goods.length-1].goodid + 1;
          }
          goods.push(this.good)
          this.$router.go(-1);
      },
      subTypeEdit(type) {
          this.$vux.confirm.prompt(type.name, {
            onCancel : () => {},
            onConfirm : (name) => {
                type.name = name;
            }
          });
      },
      subTypeAdd() {
          this.$vux.confirm.prompt('', {
            onCancel : () => {},
            onConfirm : (name) => {
                let types = this.commodity.types;
                let goods = this.commodity.goods;
                let typeid = types[types.length-1].typeid+1;
                types.push({name,typeid});
                goods[typeid] = [];
            }
          });
      },
      changeSheet(typeid, name) {
          this.goodType = {
              name,
              typeid
          };
      }
  },
  created() {
    let params = this.$route.params
    this.type = params.type;
    if(this.type === 'editGood') {
        this.good = params.good;
    } else if(this.type === 'addGood') {
        this.sheet.menus = this.commodity.types.map(item=>{ return item.name });
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/common.scss';
    .edit-good, .edit-type {
        .weui-cells {
            margin-top: 0;
        }
        .weui-btn {
            width: 90%;
            margin-top: 10vw;
        }
    }
    .edit-type {
        li {
            padding: 20px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
            .name {
                float: left;
            }
            .handle {
                float: right;
                color: #03A9F4;
            }
        }
    }
</style>
