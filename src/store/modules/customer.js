/**
 * 用户模块
 */

import {CUSTOMER} from '../types.js' //从types.js中引用常量

const state = {
    customer: {},
    store: {}
}

var getters = {
   getCustomerInfor(state) {
       return state.customer;
   },
   getStoreInfor(state) {
       return state.store;
   }
}

const actions = {
    // 设置用户信息
    setCustomerInfor({commit}, customer) {
        commit(CUSTOMER.SETCUSTOMERINFOR, customer);
    },
    // 设置店铺信息
    setStoreInfor({commit}, store) {
        commit(CUSTOMER.SELSTOREINFOR, store)
    }
}

const mutations={
    [CUSTOMER.SETCUSTOMERINFOR](state, customer){
        state.customer = customer;
    },
    [CUSTOMER.SELSTOREINFOR](state, store){
        state.store = store;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}