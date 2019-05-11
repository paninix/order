/**
 * 公共模块
 */

import {COMMON} from './types' //从types.js中引用常量

 const state = {
    status: 0,      // 登录账号类型：0未登录 1为用户 2为商家 3为骑手
    id: ''          // 用户唯一标识
 }

 const getters={
    // 获取账号登录状态
    getUserStatus(state) {
        return state.status;
    },
    getUserId(state) {
        return state.id;
    }
}

const actions = {
    // 存储用户状态信息
    setUserStatus({commit}, status) {
        commit(COMMON.USERSTATUS, status);
    },
    // 存储用户唯一标识
    setUserId({commit}, id) {
        commit(COMMON.USERID, id);
    }
}

const mutations={
    [COMMON.USERSTATUS](state, status){
        state.status = status;
    },
    [COMMON.USERID](state, id){
        state.id = id;
    }
}

export {
    state,
    getters,
    actions,
    mutations
}