import Login from '@/components/pages/login';   // 登录注册页面
import Guide from '@/components/pages/guide';   // 引导页面

import SellerIndex from '@/components/seller/index';    // 商家端-首页
import SellerOrder from '@/components/seller/order'  // 商家端-接单页面
import SellerOrders from '@/components/seller/orders'  // 商家端-订单页面
import SellerManage from '@/components/seller/manage'  // 商家端- 管理页面

import TakerIndex from '@/components/taker/index';  // 骑手端-首页

import CustomerIndex from '@/components/customer/index' // 客户端-首页
import CustomerOrder from '@/components/customer/order'  // 客户端-点餐页面
import CustomerOrders from '@/components/customer/orders'  // 客户端-订单页面
import CustomerAdmin from '@/components/customer/admin'  // 客户端- 用户页面

export default [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/guide',
        component: Guide
    }, {
        path: '/seller',
        component: SellerIndex,
        children: [
            {
                path: '/',
                redirect: 'order'
            }, {
                path: 'order',
                component: SellerOrder
            }, {
                path: 'orders',
                component: SellerOrders
            }, {
                path: 'manage',
                component: SellerManage
            }
        ]
    }, {
        path: '/taker',
        component: TakerIndex
    }, {
        path: '/customer',
        component: CustomerIndex,
        children: [
            {
                path: '/',
                redirect: 'order'
            }, {
                path: 'order',
                component: CustomerOrder
            }, {
                path: 'orders',
                component: CustomerOrders
            }, {
                path: 'admin',
                component: CustomerAdmin
            }
        ]
    }
];