import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { state, getters, actions, mutations} from './common.js';
import customer from './modules/customer.js';

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{  //这里存放的是子模块
        customer
    }
});