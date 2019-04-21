/**
 * 用户模块
 */

import {CUSTOMER} from '../types.js' //从types.js中引用常量

const state = {
    baseInfor: {}
}

var getters = {
   getCustomerBaseInfor(state) {
       return state.baseInfor;
   }
}

const actions = {
    // 初始化用户基本信息
    customerInitBaseInfor({commit}, baseInfor) {
        commit(CUSTOMER.CUSTOMERINITBASEINFOR, baseInfor);
    }
}

const mutations={
    [CUSTOMER.CUSTOMERINITBASEINFOR](state, baseInfor){
        state.baseInfor = baseInfor;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}