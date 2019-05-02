import Login from '@/components/pages/login'            // 登录注册页面
import Guide from '@/components/pages/guide'            // 引导页面

import SellerIndex from '@/components/seller/index'     // 商家端-首页
import SellerOrder from '@/components/seller/order'     // 商家端-接单页面
import SellerOrders from '@/components/seller/orders'   // 商家端-订单页面
import SellerManage from '@/components/seller/manage'   // 商家端-管理页面
import SellerGoods from '@/components/seller/goods'     // 商家端-管理页面-商品页面
import SellerRates from '@/components/seller/rates'     // 商家端-管理页面-评价页面
import SellerCounts from '@/components/seller/counts'   // 商家端-管理页面-财务页面
import SellerTakers from '@/components/seller/takers'   // 商家端-管理页面-配送页面
import SellerEdit from '@/components/seller/edit'       // 商家端-管理页面-编辑页面


import TakerIndex from '@/components/taker/index'           // 骑手端-首页

import CustomerIndex from '@/components/customer/index'     // 客户端-首页
import CustomerOrder from '@/components/customer/order'     // 客户端-点餐页面
import CustomerOrders from '@/components/customer/orders'   // 客户端-订单页面
import CustomerAdmin from '@/components/customer/admin'     // 客户端- 用户页面

export default [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'pages-login', component: Login },
    { path: '/guide', name: 'pages-guide', component: Guide }, 
    {
        path: '/seller',
        name: 'seller-index',
        component: SellerIndex,
        children: [
            { path: '/', redirect: 'order' }, 
            { path: 'order', name:'seller-order', component: SellerOrder }, 
            { path: 'orders', name:'seller-orders', component: SellerOrders }, 
            { path: 'manage', name:'seller-manage', component: SellerManage }, 
            { path: 'goods', name:'seller-goods', component: SellerGoods, meta: {isSub:true} },
            { path: 'rates', name:'seller-rates', component: SellerRates, meta: {isSub:true} },
            { path: 'counts', name:'seller-counts', component: SellerCounts, meta: {isSub:true} },
            { path: 'takers', name:'seller-takers', component: SellerTakers, meta: {isSub:true} },
            { path: 'edit', name:'seller-edit', component: SellerEdit, meta: {isSub:true} },
        ]
    }, {
        path: '/taker',
        component: TakerIndex
    }, {
        path: '/customer',
        name: 'customer-index',
        component: CustomerIndex,
        children: [
            { path: '/', redirect: 'order' }, 
            { path: 'order', name: 'customer-order', component: CustomerOrder }, 
            { path: 'orders', name: 'customer-orders', component: CustomerOrders }, 
            { path: 'admin', name: 'customer-admin', component: CustomerAdmin }
        ]
    }
];