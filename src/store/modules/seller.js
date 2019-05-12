/**
 * 商家模块
 */

import {SELLER} from '../types.js' //从types.js中引用常量

const state = {
    seller: {}
}

var getters = {
   getSellerBaseInfor(state) {
       return state.seller.baseInfor;
   },
   getSellerCommodity(state) {
       return state.seller.commodity;
   }
}

const actions = {
    // 保存用户信息
    setSellerInfor({commit}, seller) {
        commit(SELLER.SELLERINFOR, seller);
    }
}

const mutations={
    [SELLER.SELLERINFOR](state, seller){
        state.seller = seller;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}