import sendRequest from '../base';
const CACHE_KEY = 'customer_cache_key'

export default  {
	addOne(options) {
		return sendRequest(CACHE_KEY, 'customer-addOne',options)
	},
	getOne(options) {
		return sendRequest(CACHE_KEY, 'customer-getOne',options)
	},
	updateBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-updateBaseInfor',options)
	}
}