/**
 * 用户模块
 */

import {CUSTOMER} from '../types.js' //从types.js中引用常量

const state = {
    customer: {}
}

var getters = {
   getCustomerInfor(state) {
       return state.customer;
   }
}

const actions = {
    // 初始化用户基本信息
    customerInitInfor({commit}, customer) {
        commit(CUSTOMER.CUSTOMERINITINFOR, customer);
    }
}

const mutations={
    [CUSTOMER.CUSTOMERINITINFOR](state, customer){
        state.customer = customer;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}