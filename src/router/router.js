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
import SellerGoodEdit from '@/components/seller/goodEdit'     // 商家端-管理页面-商品编辑页面
import SellerStoreEdit from '@/components/seller/storeEdit'   // 商家端-管理页面-店铺详情页面


import TakerIndex from '@/components/taker/index'           // 骑手端-首页

import CustomerIndex from '@/components/customer/index'     // 客户端-首页
import CustomerOrder from '@/components/customer/order'     // 客户端-点餐页面
import CustomerOrders from '@/components/customer/orders'   // 客户端-订单页面
import CustomerAdmin from '@/components/customer/admin'     // 客户端- 用户页面
import CustomerPay from '@/components/customer/pay'         // 客户端- 支付页面

import StoreIndex from '@/components/store/index'           // 店铺-首页
import StoreOrder from '@/components/store/order'           // 店铺-点餐页面
import StoreRate from '@/components/store/rate'             // 店铺-评价页面
import StoreInfor from '@/components/store/infor'           // 店铺-详情页面
import StoreGood from '@/components/store/good'             // 店铺-商品页面

export default [
    { path: '/login', name: 'pages-login', component: Login },
    { path: '/guide', name: 'pages-guide', component: Guide }, 
    {
        path: '/seller',
        component: SellerIndex,
        children: [
            { path: '/', redirect: 'order' }, 
            { path: 'order', name:'seller-order', component: SellerOrder, meta: {tabTitle:'接单'} }, 
            { path: 'orders', name:'seller-orders', component: SellerOrders, meta: {tabTitle:'订单'} }, 
            { path: 'manage', name:'seller-manage', component: SellerManage, meta: {tabTitle:'管理'}  }, 
            { path: 'goods', name:'seller-goods', component: SellerGoods, meta: {tabTitle:'商品', isSub:true} },
            { path: 'rates', name:'seller-rates', component: SellerRates, meta: {tabTitle:'评价', isSub:true} },
            { path: 'counts', name:'seller-counts', component: SellerCounts, meta: {tabTitle:'财务', isSub:true} },
            { path: 'takers', name:'seller-takers', component: SellerTakers, meta: {tabTitle:'配送', isSub:true} },
            { path: 'goodEdit', name:'seller-goodEdit', component: SellerGoodEdit, meta: {tabTitle:'商品编辑', isSub:true} },
            { path: 'storeEdit', name:'seller-storeEdit', component: SellerStoreEdit, meta: {tabTitle:'店铺详情', isSub:true} },
        ]
    }, {
        path: '/taker',
        component: TakerIndex
    }, {
        path: '/customer',
        component: CustomerIndex,
        children: [
            { path: '/', redirect: 'order' }, 
            { path: 'order', name: 'customer-order', component: CustomerOrder, meta: {tabTitle:'点餐'} }, 
            { path: 'orders', name: 'customer-orders', component: CustomerOrders, meta: {tabTitle:'订单'} }, 
            { path: 'admin', name: 'customer-admin', component: CustomerAdmin, meta: {tabTitle:'我的'} },
            { path: 'pay', name: 'customer-pay', component: CustomerPay, meta: {tabTitle:'支付', isSub:true} }
        ]
    }, {
        path: '/store',
        component: StoreIndex,
        children: [
            { path: '/', redirect: 'order' }, 
            { path: 'order', name: 'store-order', component: StoreOrder }, 
            { path: 'rate', name: 'store-rate', component: StoreRate }, 
            { path: 'infor', name: 'store-infor', component: StoreInfor },
            { path: 'good', name: 'store-good', component: StoreGood, meta: {isSub:true}}
        ]
    }
];