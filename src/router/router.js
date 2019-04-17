import Login from '@/components/pages/login';   // 登录注册页面

import SellerIndex from '@/components/seller/index';    // 商家端首页
import TakerIndex from '@/components/taker/index';  // 骑手端首页
import CustomerIndex from '@/components/customer/index' // 客户端首页

export default [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/seller',
        component: SellerIndex
    }, {
        path: '/taker',
        component: TakerIndex
    }, {
        path: '/customer',
        component: CustomerIndex
    }
];