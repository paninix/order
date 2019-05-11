/**
 * 商家模块
 */

import {SELLER} from '../types.js' //从types.js中引用常量

const state = {
    sBaseInfor: {}
}

var getters = {
   getSellerBaseInfor(state) {
       return state.sBaseInfor;
   }
}

const actions = {
    // 初始化用户基本信息
    setSellerBaseInfor({commit, state}, sBaseInfor) {
        commit(SELLER.SELLERBASEINFOR, sBaseInfor);
    }
}

const mutations={
    [SELLER.SELLERBASEINFOR](state, sBaseInfor){
        state.sBaseInfor = sBaseInfor;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}