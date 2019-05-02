import sendRequest from '../base';
const CACHE_KEY = 'seller_cache_key'

export default  {
	// 获取商家信息
	getInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-getInfor',options)
	},
	// 更新商家信息
	updateInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-updateInfor',options)
	},
	// 插入一条商家信息
	addInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-addInfor',options)
	},
	// 获取商品列表
	getList(options) {
		return sendRequest(CACHE_KEY, 'seller-getList',options)
	},
	// 更新商品列表
	updateGoodsList(options) {
		return sendRequest(CACHE_KEY, 'seller-updateGoodsList',options)
	}
}