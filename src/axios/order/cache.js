import sendRequest from '../base';
const CACHE_KEY = 'order_cache_key'

export default  {
	// 添加一条订单信息
	addOrder(options) {
		return sendRequest(CACHE_KEY, 'order-addOrder',options)
	},
	// 获取商家订单信息
	getSellerOrders(options) {
		return sendRequest(CACHE_KEY, 'order-getSellerOrders',options)
	},
	// 获取用户订单信息
	getCustomerOrders(options) {
		return sendRequest(CACHE_KEY, 'order-getCustomerOrders',options)
	},
}