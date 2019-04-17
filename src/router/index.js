import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

import routes from './router'

const router = new Router({
  routes
})

// 请求前
router.beforeEach((res,from,next)=>{
  let isLogin = store.state.identity;
  if(!isLogin && res.path !== '/login'){
    return next({path:'/login'})
  }
  next();
})
// 请求后
router.afterEach((res, from, next)=>{
  
}) 

export default router
