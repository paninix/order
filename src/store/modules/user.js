/**
 * 用户模块
 */

import types from '../types.js' //从types.js中引用常量

 const state={
    count:6
 }

var getters={
    count(state){
        return state.count;
    }
}

const actions = {
    increment({commit,state}){
        commit(types.INCREMENT); //提交一个名为increment的变化，名称可自定义，可以认为是类型名
    },
    decrement({commit,state}){
        if(state.count>10){
            commit(types.DECREMENT);
        }
    }
}

const mutations={
    [types.INCREMENT](state){
        state.count++;
    },
    [types.DECREMENT](state){ //es6语法：[]内的视为常量
        state.count--;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}