import sendRequest from '../base';
const CACHE_KEY = 'seller_cache_key'

export default  {
	// 插入商家信息
	addOne(options) {
		return sendRequest(CACHE_KEY, 'seller-addOne',options)
	},
	// 获取商家信息
	getOne(options) {
		return sendRequest(CACHE_KEY, 'seller-getOne',options)
	},
	// 更新商家基本信息
	updateBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-updateBaseInfor',options)
	},
	// 更新商品列表
	updateCommodity(options) {
		return sendRequest(CACHE_KEY, 'seller-updateCommodity',options)
	},
	// 客户端获取商家列表
	getStoresList(options) {
		return sendRequest(CACHE_KEY, 'seller-getStoresList',options)
	},
	// 客户端获取商家信息
	getStoreInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-getStoreInfor',options)
	},
}