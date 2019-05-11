import sendRequest from '../base';
const CACHE_KEY = 'seller_cache_key'

export default  {
	// 插入一条商家信息
	addOne(options) {
		return sendRequest(CACHE_KEY, 'seller-addOne',options)
	},
	// 获取商家基本信息
	getBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-getBaseInfor',options)
	},
	// 更新商家基本信息
	updateBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-updateBaseInfor',options)
	},
	// 获取商家列表
	getStoresList(options) {
		return sendRequest(CACHE_KEY, 'seller-getStoresList',options)
	},
	// 获取商家店铺信息
	getStoreInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-getStoreInfor',options)
	},
	// 更新商品列表
	updateGoodsList(options) {
		return sendRequest(CACHE_KEY, 'seller-updateGoodsList',options)
	}
}