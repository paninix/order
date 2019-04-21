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
    },
    // 获取用户基本信息
    getUserBaseInfor(state) {
        return state.baseInfor;
    }
    
}

const actions = {
    // 用户登录状态
    userLogin({commit}, identity){
        commit(COMMON.USERLOGIN, identity);
    },
    // 初始化用户基本信息
    userInitBaseInfor({commit}, baseInfor) {
        commit(COMMON.USERINITBASEINFOR, baseInfor);
    }
}

const mutations={
    [COMMON.USERLOGIN](state, identity){
        state.identity = identity;
    },
    [COMMON.USERINITBASEINFOR](state, baseInfor){
        state.baseInfor = baseInfor;
    }
}

export {
    state,
    getters,
    actions,
    mutations
}