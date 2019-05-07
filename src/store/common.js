/**
 * 公共模块
 */

import {COMMON} from './types' //从types.js中引用常量

 const state = {
    status: 0,      // 登录账号类型：0未登录 1为用户 2为商家 3为骑手
    phone: ''       // 用户手机号
 }

 const getters={
    // 获取账号登录状态
    getUserStatus(state) {
        return state.status;
    },
    // 获取手机号
    getUserPhone(state) {
        return state.phone;
    }
}

const actions = {
    // 用户全局状态初始化
    setUserGlobalData({commit}, {status, phone}) {
        commit(COMMON.USERSTATUS, status);
        commit(COMMON.USERPHONE, phone);
    }
}

const mutations={
    [COMMON.USERSTATUS](state, status){
        state.status = status;
    },
    [COMMON.USERPHONE](state, phone){
        state.phone = phone;
    }
}

export {
    state,
    getters,
    actions,
    mutations
}