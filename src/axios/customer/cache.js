import sendRequest from '../base';
const CACHE_KEY = 'customer_cache_key'

export default  {
	getInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-getInfor',options)
	},
	updateInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-updateInfor',options)
	},
	addInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-addInfor',options)
	}
}