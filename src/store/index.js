import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import user from './modules/user.js'

export default new Vuex.Store({
    modules:{  //这里存放的是子模块
        user
    }
});