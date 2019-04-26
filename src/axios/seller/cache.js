import sendRequest from '../base';
const CACHE_KEY = 'seller_cache_key'

export default  {
	getInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-getInfor',options)
	},
	updateInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-updateInfor',options)
	},
	addInfor(options) {
		return sendRequest(CACHE_KEY, 'seller-addInfor',options)
	},
	getList(options) {
		return sendRequest(CACHE_KEY, 'seller-getList',options)
	}
}