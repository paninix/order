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
  let status = store.state.status;
  // 未登录
  if(!status) {
    // 未登录且访问的不是login页面
    if(res.path !== '/login') {
      return next({path:'/login'});
    }
  } else {  //已经登录
    if(res.path === '/store') {
      return next();
    }
    let routes = ['/', 'customer', 'seller', 'taker'];
    // 访问的不是对应用户类型的页面
    if(res.path.indexOf(routes[status]) === -1) {
      return next({path:''})
    }
  }
  next();
})
// 请求后
router.afterEach((res, from, next)=>{
  
}) 

export default router
