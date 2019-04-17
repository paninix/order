import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { state, getters, actions, mutations} from './common.js';
import user from './modules/user.js';

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{  //这里存放的是子模块
        user
    }
});