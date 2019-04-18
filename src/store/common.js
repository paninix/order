/**
 * 公共模块
 */

import {COMMON} from './types' //从types.js中引用常量
// import {COMMON} from './type/index' //从types.js中引用常量

 const state = {
    identity: 0 // 登录账号类型：0未登录 1为用户 2为商家 3为骑手
 }

 const getters={
    // 获取账号登录状态
    loginStatus(state){
        return state.identity;
    }
}

const actions = {
    userLogin({commit}, identity){
        commit(COMMON.USERLOGIN, identity);
    }
}

const mutations={
    [COMMON.USERLOGIN](state, identity){
        state.identity = identity;
    }
}

export {
    state,
    getters,
    actions,
    mutations
}