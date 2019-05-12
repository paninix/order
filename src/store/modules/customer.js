/**
 * 用户模块
 */

import { CUSTOMER } from '../types.js' //从types.js中引用常量

const state = {
    customer: {},
    store: {},
    cart: {
        total: 0,
        goods: {}
    }
}

var getters = {
    getCustomerBaseInfor(state) {
        return state.customer.baseInfor;
    },
    getStoreBaseInfor(state) {
        return state.store.baseInfor;
    },
    getStoreCommodity(state) {
        return state.store.commodity;
    },
    getStoreId(state) {
        return state.store._id;
    },
    getCart(state) {
        return state.cart;
    }
}

const actions = {
    // 设置用户信息
    setCustomerInfor({ commit }, customer) {
        commit(CUSTOMER.CUSTOMERINFOR, customer);
    },
    // 设置店铺信息
    setStoreInfor({ commit }, store) {
        commit(CUSTOMER.STOREINFOR, store)
    },
    // 购物车
    handleGood({ commit, state }, good) {
        let cart = state.cart;
        if (good.count === 1) {
            if (!cart.goods[good.goodid]) {
                cart.goods[good.goodid] = good;
            }
        } else if (good.count === 0) {
            if (cart.goods[good.goodid]) {
                delete cart.goods[good.goodid];
            }
        }
        let total = 0, price = 0;
        for (let index in cart.goods) {
            price = cart.goods[index].price * cart.goods[index].count;
            total += price;
        }
        cart.total = total;
    }
}

const mutations = {
    [CUSTOMER.CUSTOMERINFOR](state, customer) {
        state.customer = customer;
    },
    [CUSTOMER.STOREINFOR](state, store) {
        state.store = store;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}