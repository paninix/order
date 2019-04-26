/**
 * 商家模块
 */

import {SELLER} from '../types.js' //从types.js中引用常量

const state = {
    seller: {}
}

var getters = {
   getSellerInfor(state) {
       return state.seller;
   }
}

const actions = {
    // 初始化用户基本信息
    sellerInitInfor({commit}, seller) {
        commit(SELLER.SELLERINITINFOR, seller);
    }
}

const mutations={
    [SELLER.SELLERINITINFOR](state, seller){
        state.seller = seller;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}